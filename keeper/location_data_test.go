package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/cosmonaut/farmchain/testutil/keeper"
	"github.com/cosmonaut/farmchain/testutil/nullify"
	"github.com/cosmonaut/farmchain/x/farmchain/keeper"
	"github.com/cosmonaut/farmchain/x/farmchain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNLocationData(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.LocationData {
	items := make([]types.LocationData, n)
	for i := range items {
		items[i].Timestamp = strconv.Itoa(i)
		items[i].Location = strconv.Itoa(i)

		keeper.SetLocationData(ctx, items[i])
	}
	return items
}

func TestLocationDataGet(t *testing.T) {
	keeper, ctx := keepertest.FarmchainKeeper(t)
	items := createNLocationData(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetLocationData(ctx,
			item.Timestamp,
			item.Location,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestLocationDataRemove(t *testing.T) {
	keeper, ctx := keepertest.FarmchainKeeper(t)
	items := createNLocationData(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveLocationData(ctx,
			item.Timestamp,
			item.Location,
		)
		_, found := keeper.GetLocationData(ctx,
			item.Timestamp,
			item.Location,
		)
		require.False(t, found)
	}
}

func TestLocationDataGetAll(t *testing.T) {
	keeper, ctx := keepertest.FarmchainKeeper(t)
	items := createNLocationData(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllLocationData(ctx)),
	)
}
