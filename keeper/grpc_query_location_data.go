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

func (k Keeper) LocationDataAll(c context.Context, req *types.QueryAllLocationDataRequest) (*types.QueryAllLocationDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var locationDatas []types.LocationData
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	locationDataStore := prefix.NewStore(store, types.KeyPrefix(types.LocationDataKeyPrefix))

	pageRes, err := query.Paginate(locationDataStore, req.Pagination, func(key []byte, value []byte) error {
		var locationData types.LocationData
		if err := k.cdc.Unmarshal(value, &locationData); err != nil {
			return err
		}

		locationDatas = append(locationDatas, locationData)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllLocationDataResponse{LocationData: locationDatas, Pagination: pageRes}, nil
}

func (k Keeper) LocationData(c context.Context, req *types.QueryGetLocationDataRequest) (*types.QueryGetLocationDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetLocationData(
		ctx,
		req.Timestamp,
		req.Location,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetLocationDataResponse{LocationData: val}, nil
}
