import json

name_found = False

# Get user input
name = input("Name: ")
scores = input("Scores: ")

# Format new data
scores_list = scores.split()
if len(scores_list) != 13:
    exit("score list length is not 13")
new_score = {
    "year": int(scores_list[0]),
    "hogans": int(scores_list[1]),
    "speed": int(scores_list[2]),
    "turkey": int(scores_list[3]),
    "gut": int(scores_list[4]),
    "block": int(scores_list[5]),
    "pistol": int(scores_list[6]),
    "skeet": int(scores_list[7]),
    "teal": int(scores_list[8]),
    "trap": int(scores_list[9]),
    "rabbit": int(scores_list[10]),
    "shotgun": int(scores_list[11]),
    "total": int(scores_list[12])
}

# Read the existing scores.json
with open('./gatsbynetlify/src/data/scores.json', 'r') as file:
    data = json.load(file)
    for i in data['shooters']:
        if i["name"] == name:
            i["scores"].append(new_score)
            name_found = True
    file.close()

if not name_found:
    exit("Name not found")

# Write to the scores.json
json_object = json.dumps(data, indent=2)
with open('./gatsbynetlify/src/data/scores.json', 'w') as out_file:
    out_file.write(json_object)
