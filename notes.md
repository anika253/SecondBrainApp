schema looks like->

1.  users->id:ObjectId, username:string, password:string
2.  Content->\_id:ObjectID , link:String , type:string|enum, title:String,
    tags:tagReference, user_id:userRef
    enum here means it can be either of these 4 values:
    Image/Vedio/Article/Audio  
    user_id is foreign key to this contennt table samw with tag_reference
3.  Tags-> \_id:Object_id, title:String
4.  Link-> id:ObjectId, hash:String, userId:userReference
    // userID is reference to the user table here .
    Foreign key relationships!
    // username needs to be unique here.
    ->npm init-y
    ->npm i typesript
    ->npx tsc --init
    ->in tsc config file in module part change
    rootDir to "./src"
    outDir to "./dist"
    ->npm i express
    ->import statement diff in typescript
    ->create src folder and make a src folder inside it
