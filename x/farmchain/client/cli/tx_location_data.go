package cli

import (
	"github.com/cosmonaut/farmchain/x/farmchain/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

func CmdCreateLocationData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-location-data [timestamp] [location] [temperature] [humidity] [soil-moisture] [growth-percentage] [crop]",
		Short: "Create a new locationData",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexTimestamp := args[0]
			indexLocation := args[1]

			// Get value arguments
			argTemperature := args[2]
			argHumidity := args[3]
			argSoilMoisture := args[4]
			argGrowthPercentage := args[5]
			argCrop := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateLocationData(
				clientCtx.GetFromAddress().String(),
				indexTimestamp,
				indexLocation,
				argTemperature,
				argHumidity,
				argSoilMoisture,
				argGrowthPercentage,
				argCrop,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateLocationData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-location-data [timestamp] [location] [temperature] [humidity] [soil-moisture] [growth-percentage] [crop]",
		Short: "Update a locationData",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexTimestamp := args[0]
			indexLocation := args[1]

			// Get value arguments
			argTemperature := args[2]
			argHumidity := args[3]
			argSoilMoisture := args[4]
			argGrowthPercentage := args[5]
			argCrop := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateLocationData(
				clientCtx.GetFromAddress().String(),
				indexTimestamp,
				indexLocation,
				argTemperature,
				argHumidity,
				argSoilMoisture,
				argGrowthPercentage,
				argCrop,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteLocationData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-location-data [timestamp] [location]",
		Short: "Delete a locationData",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexTimestamp := args[0]
			indexLocation := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteLocationData(
				clientCtx.GetFromAddress().String(),
				indexTimestamp,
				indexLocation,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
