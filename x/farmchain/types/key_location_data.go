package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// LocationDataKeyPrefix is the prefix to retrieve all LocationData
	LocationDataKeyPrefix = "LocationData/value/"
)

// LocationDataKey returns the store key to retrieve a LocationData from the index fields
func LocationDataKey(
	timestamp string,
	location string,
) []byte {
	var key []byte

	timestampBytes := []byte(timestamp)
	key = append(key, timestampBytes...)
	key = append(key, []byte("/")...)

	locationBytes := []byte(location)
	key = append(key, locationBytes...)
	key = append(key, []byte("/")...)

	return key
}
