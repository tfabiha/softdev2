#Team OnePlusOneIsThree -- Soojin Choi && T Fabiha
#SoftDev2 pd7
#K07 -- Import/Export Bank
#2019-03-05

"""
The data set we have used is movies and it contains:
- titles of movies
	- year
	- cast 
	- genres 

This dataset is hosted https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json

Our import mechanism is to get the json file and read the file. We then use 
the json.load() in order to decode the data and then insert that into the db 
collection we have initialized.
"""

import json
import pymongo

SERVER_ADDR = "159.65.231.92"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.oneplusoneisthree
collection = db.movies

def create(filename):
    with open(filename) as f:
        j = json.load(f)

    collection.insert(j)

def in_year(y):
    obj = collection.find({"year" : y})

    for i in obj:
        print(i)

def with_actor(actor):
    obj = collection.find({"cast" : actor})

    for i in obj:
        print(i)

def of_genre(genre):
    obj = collection.find({"genres" : genre})

    for i in obj:
        print(i)

def with_actors(actor0, actor1):
    obj = collection.find({"$and" : [{"cast" : actor0}, {"cast" : actor1}] })

    for i in obj:
        print(i)


create("movies.json")
#in_year(1900)
#with_actor("Bradley Cooper")
#of_genre("Crime")
with_actors("Bradley Cooper", "Clint Eastwood")
