#!/bin/sh
# creates a score json object using a string that comes from a row in excel
echo "testing"
read row
echo "entire row"
echo $row
row_array=( $row )
echo "first item"
echo ${row_array[0]}
echo "{"
echo "  \"year\": ${row_array[0]},"
echo "  \"hogans\": ${row_array[1]},"
echo "  \"speed\": ${row_array[2]},"
echo "  \"turkey\": ${row_array[3]},"
echo "  \"block\": ${row_array[4]},"
echo "  \"pistol\": ${row_array[5]},"
echo "  \"skeet\": ${row_array[6]},"
echo "  \"teal\": ${row_array[7]},"
echo "  \"trap\": ${row_array[8]},"
echo "  \"rabbit\": ${row_array[9]},"
echo "  \"shotgun\": ${row_array[10]},"
echo "  \"total\": ${row_array[11]}"
echo "}"