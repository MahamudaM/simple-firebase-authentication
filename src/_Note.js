/*
===================56-1 to 5  Display logged in user info, Sign out, toggle sign in, sign out

---------------------------
INITIAL SETUP 
------------------------
1.visit :firebase.google.com 
=>go to console 
2.create a new firebase project (
    akhane project name deya continue a click korle google Analytics ace jar dara boja jai amr website a koijon visite korce
    + kotha thake visit korce.ata valo akta jenis but amra sorota jamela na kora jono akhon ata skip korbo.
Google Analytics :1.akte web analytics service 2. website ar traffic k track kore report create kore 3.website ar shathe visitor
ar  interaction ar trend and pattern nirnoi korte user k help kore.
)
3.visit doc : go to docs
=>build>authentication>web>getting start (amra jkhon first time firebase use kori sa khatre amder k firebase authentication 
    SDK instal korte bole.SDK hoccha software development kit.akta package ar modday ak sathay koto golo software development
    tools ar collection ja nirdisto application toirer kaj k sohoj kore dai.
firebase SDK ak ba akar odik sign-in methods ar sommonoi gotia authentication system k handle korar kaj sohoj kora dai.)
=>click 1 no option 1.install the Firebase JS SDK and initialize Firebase. jahato amra project creat kore falce tai amra akhon
4.register your app a click korbo.
=>akhon Firebase console's project overview page a jete hobe ai page te hoccha firebass.google.com=>console docs =>ami jai
project a kaj korbo oi project a click korle ja page asbe oitai .akhon akhane amre icon joktao onk option dekbo agolo thkae
amre jahato web ar jonno banabo tai web a click kore registation korbo oi project name diya (chaile onno name use korte paro).
5.Install firebase for your project : npm install firebase

6.DANGEROUS : get firebase config and put it  in firebase.init.js
7.export app from firebase.init.js

--------------------
SETUP AUTH PROVIDER
------------------------

8.create auth using getAuth from firebase by using app from firebase.init.js
9.creat a google auth provider.do not forget to use new GoogleAuthProvider() 
10.ami jai project a kaj korbo oita te click>left side menu take Build a click>Authentication>Sign-in-method>
11.Enable google sign in method with give your email.
12.create a button for google sign in method with a event handler
13.inside the event handler, call signInWithPopup with auth, provider
14.after signInWithPopup .then result,error
------------------------
DISPLAY DATA 
------------------------

----------------
ADD A NEW SIGN IN METHOD
--------------------------
1.enable sign in method
2.creat app inside github,twitter,facebook etc 
3.get client ID and secret 



*/