package keeper

import (
	"context"

	"github.com/cosmonaut/farmchain/x/farmchain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateLocationData(goCtx context.Context, msg *types.MsgCreateLocationData) (*types.MsgCreateLocationDataResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetLocationData(
		ctx,
		msg.Timestamp,
		msg.Location,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var locationData = types.LocationData{
		Creator:          msg.Creator,
		Timestamp:        msg.Timestamp,
		Location:         msg.Location,
		Temperature:      msg.Temperature,
		Humidity:         msg.Humidity,
		SoilMoisture:     msg.SoilMoisture,
		GrowthPercentage: msg.GrowthPercentage,
		Crop:             msg.Crop,
	}

	k.SetLocationData(
		ctx,
		locationData,
	)
	return &types.MsgCreateLocationDataResponse{}, nil
}

func (k msgServer) UpdateLocationData(goCtx context.Context, msg *types.MsgUpdateLocationData) (*types.MsgUpdateLocationDataResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetLocationData(
		ctx,
		msg.Timestamp,
		msg.Location,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var locationData = types.LocationData{
		Creator:          msg.Creator,
		Timestamp:        msg.Timestamp,
		Location:         msg.Location,
		Temperature:      msg.Temperature,
		Humidity:         msg.Humidity,
		SoilMoisture:     msg.SoilMoisture,
		GrowthPercentage: msg.GrowthPercentage,
		Crop:             msg.Crop,
	}

	k.SetLocationData(ctx, locationData)

	return &types.MsgUpdateLocationDataResponse{}, nil
}

func (k msgServer) DeleteLocationData(goCtx context.Context, msg *types.MsgDeleteLocationData) (*types.MsgDeleteLocationDataResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetLocationData(
		ctx,
		msg.Timestamp,
		msg.Location,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveLocationData(
		ctx,
		msg.Timestamp,
		msg.Location,
	)

	return &types.MsgDeleteLocationDataResponse{}, nil
}
