package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/cosmonaut/farmchain/testutil/keeper"
	"github.com/cosmonaut/farmchain/testutil/nullify"
	"github.com/cosmonaut/farmchain/x/farmchain/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestLocationDataQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.FarmchainKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNLocationData(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetLocationDataRequest
		response *types.QueryGetLocationDataResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetLocationDataRequest{
				Timestamp: msgs[0].Timestamp,
				Location:  msgs[0].Location,
			},
			response: &types.QueryGetLocationDataResponse{LocationData: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetLocationDataRequest{
				Timestamp: msgs[1].Timestamp,
				Location:  msgs[1].Location,
			},
			response: &types.QueryGetLocationDataResponse{LocationData: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetLocationDataRequest{
				Timestamp: strconv.Itoa(100000),
				Location:  strconv.Itoa(100000),
			},
			err: status.Error(codes.InvalidArgument, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.LocationData(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestLocationDataQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.FarmchainKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNLocationData(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllLocationDataRequest {
		return &types.QueryAllLocationDataRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.LocationDataAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.LocationData), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.LocationData),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.LocationDataAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.LocationData), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.LocationData),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.LocationDataAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.LocationData),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.LocationDataAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
