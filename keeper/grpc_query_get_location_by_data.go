package keeper

import (
	"context"

	"github.com/cosmonaut/farmchain/x/farmchain/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetLocationByData(goCtx context.Context, req *types.QueryGetLocationByDataRequest) (*types.QueryGetLocationByDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	var locationDatas []string
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx
	store := ctx.KVStore(k.storeKey)
	locationDataStore := prefix.NewStore(store, types.KeyPrefix(types.LocationDataKeyPrefix))

	pageRes, err := query.Paginate(locationDataStore, req.Pagination, func(key []byte, value []byte) error {
		var locationData types.LocationData
		if err := k.cdc.Unmarshal(value, &locationData); err != nil {
			return err
		}
		if req.Crop == locationData.Crop && req.Timestamp == locationData.Timestamp && req.GrowthPercentage == locationData.GrowthPercentage && req.Humidity == locationData.Humidity && req.Temperature == locationData.Temperature && req.SoilMoisture == locationData.SoilMoisture {
			locationDatas = append(locationDatas, locationData.Location)
		}
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetLocationByDataResponse{Location: locationDatas, Pagination: pageRes}, nil
}
