#T Fabiha
#SoftDev2 pd7
#K06 -- Yummy Mongo Py
#2019-03-01

import pymongo

SERVER_ADDR = "159.65.231.92"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def in_borough( borough ):
    obj = collection.find({"borough" : borough})

    for i in obj:
        print(i)

def in_zip( zipcode ):
    obj = collection.find({"address.zipcode" : zipcode})

    for i in obj:
        print(i)

def in_zip_w_grade( zipcode, grade ):
    obj = collection.find({"$and" : [{"address.zipcode" : zipcode}, {"grades.grade" : grade}]})

    for i in obj:
        print(i)

def in_zip_below( zipcode, score ):
    obj = collection.find({"$and" : [{"address.zipcode" : zipcode}, {"grades.score" : {"$lt" : score}}]})

    for i in obj:
        print(i)
        
#in_borough("Queens")
#in_zip("11432")
#in_zip_w_grade("11432", "Z")
#in_zip_below("11432" , 50)
