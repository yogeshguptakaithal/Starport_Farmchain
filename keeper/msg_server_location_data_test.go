package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/cosmonaut/farmchain/testutil/keeper"
	"github.com/cosmonaut/farmchain/x/farmchain/keeper"
	"github.com/cosmonaut/farmchain/x/farmchain/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestLocationDataMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.FarmchainKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateLocationData{Creator: creator,
			Timestamp: strconv.Itoa(i),
			Location:  strconv.Itoa(i),
		}
		_, err := srv.CreateLocationData(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetLocationData(ctx,
			expected.Timestamp,
			expected.Location,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestLocationDataMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateLocationData
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateLocationData{Creator: creator,
				Timestamp: strconv.Itoa(0),
				Location:  strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateLocationData{Creator: "B",
				Timestamp: strconv.Itoa(0),
				Location:  strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateLocationData{Creator: creator,
				Timestamp: strconv.Itoa(100000),
				Location:  strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.FarmchainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateLocationData{Creator: creator,
				Timestamp: strconv.Itoa(0),
				Location:  strconv.Itoa(0),
			}
			_, err := srv.CreateLocationData(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateLocationData(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetLocationData(ctx,
					expected.Timestamp,
					expected.Location,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestLocationDataMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteLocationData
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteLocationData{Creator: creator,
				Timestamp: strconv.Itoa(0),
				Location:  strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteLocationData{Creator: "B",
				Timestamp: strconv.Itoa(0),
				Location:  strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteLocationData{Creator: creator,
				Timestamp: strconv.Itoa(100000),
				Location:  strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.FarmchainKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateLocationData(wctx, &types.MsgCreateLocationData{Creator: creator,
				Timestamp: strconv.Itoa(0),
				Location:  strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteLocationData(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetLocationData(ctx,
					tc.request.Timestamp,
					tc.request.Location,
				)
				require.False(t, found)
			}
		})
	}
}
