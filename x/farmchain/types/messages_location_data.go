package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateLocationData = "create_location_data"
	TypeMsgUpdateLocationData = "update_location_data"
	TypeMsgDeleteLocationData = "delete_location_data"
)

var _ sdk.Msg = &MsgCreateLocationData{}

func NewMsgCreateLocationData(
	creator string,
	timestamp string,
	location string,
	temperature string,
	humidity string,
	soilMoisture string,
	growthPercentage string,
	crop string,

) *MsgCreateLocationData {
	return &MsgCreateLocationData{
		Creator:          creator,
		Timestamp:        timestamp,
		Location:         location,
		Temperature:      temperature,
		Humidity:         humidity,
		SoilMoisture:     soilMoisture,
		GrowthPercentage: growthPercentage,
		Crop:             crop,
	}
}

func (msg *MsgCreateLocationData) Route() string {
	return RouterKey
}

func (msg *MsgCreateLocationData) Type() string {
	return TypeMsgCreateLocationData
}

func (msg *MsgCreateLocationData) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateLocationData) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateLocationData) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateLocationData{}

func NewMsgUpdateLocationData(
	creator string,
	timestamp string,
	location string,
	temperature string,
	humidity string,
	soilMoisture string,
	growthPercentage string,
	crop string,

) *MsgUpdateLocationData {
	return &MsgUpdateLocationData{
		Creator:          creator,
		Timestamp:        timestamp,
		Location:         location,
		Temperature:      temperature,
		Humidity:         humidity,
		SoilMoisture:     soilMoisture,
		GrowthPercentage: growthPercentage,
		Crop:             crop,
	}
}

func (msg *MsgUpdateLocationData) Route() string {
	return RouterKey
}

func (msg *MsgUpdateLocationData) Type() string {
	return TypeMsgUpdateLocationData
}

func (msg *MsgUpdateLocationData) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateLocationData) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateLocationData) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteLocationData{}

func NewMsgDeleteLocationData(
	creator string,
	timestamp string,
	location string,

) *MsgDeleteLocationData {
	return &MsgDeleteLocationData{
		Creator:   creator,
		Timestamp: timestamp,
		Location:  location,
	}
}
func (msg *MsgDeleteLocationData) Route() string {
	return RouterKey
}

func (msg *MsgDeleteLocationData) Type() string {
	return TypeMsgDeleteLocationData
}

func (msg *MsgDeleteLocationData) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteLocationData) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteLocationData) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
