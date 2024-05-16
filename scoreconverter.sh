#!/bin/sh
# creates a score json object using a string that comes from a row in excel
read row
echo "entire row"
echo $row
row_array=( $row )
converted_scores="{\n"
converted_scores+="  \"year\": ${row_array[0]},\n"
converted_scores+="  \"hogans\": ${row_array[1]},\n"
converted_scores+="  \"speed\": ${row_array[2]},\n"
converted_scores+="  \"turkey\": ${row_array[3]},\n"
#block is the same as knockdown
converted_scores+="  \"block\": ${row_array[4]},\n"
converted_scores+="  \"gut\": ${row_array[5]},\n"
converted_scores+="  \"pistol\": ${row_array[6]},\n"
converted_scores+="  \"skeet\": ${row_array[7]},\n"
converted_scores+="  \"teal\": ${row_array[8]},\n"
converted_scores+="  \"trap\": ${row_array[9]},\n"
converted_scores+="  \"rabbit\": ${row_array[10]},\n"
converted_scores+="  \"shotgun\": ${row_array[11]},\n"
converted_scores+="  \"total\": ${row_array[12]}\n"
converted_scores+="}"
echo -e $converted_scores | xclip -selection clipboard