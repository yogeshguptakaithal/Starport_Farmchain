package keeper

import (
	"github.com/cosmonaut/farmchain/x/farmchain/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetLocationData set a specific locationData in the store from its index
func (k Keeper) SetLocationData(ctx sdk.Context, locationData types.LocationData) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LocationDataKeyPrefix))
	b := k.cdc.MustMarshal(&locationData)
	store.Set(types.LocationDataKey(
		locationData.Timestamp,
		locationData.Location,
	), b)
}

// GetLocationData returns a locationData from its index
func (k Keeper) GetLocationData(
	ctx sdk.Context,
	timestamp string,
	location string,

) (val types.LocationData, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LocationDataKeyPrefix))

	b := store.Get(types.LocationDataKey(
		timestamp,
		location,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveLocationData removes a locationData from the store
func (k Keeper) RemoveLocationData(
	ctx sdk.Context,
	timestamp string,
	location string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LocationDataKeyPrefix))
	store.Delete(types.LocationDataKey(
		timestamp,
		location,
	))
}

// GetAllLocationData returns all locationData
func (k Keeper) GetAllLocationData(ctx sdk.Context) (list []types.LocationData) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LocationDataKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.LocationData
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
