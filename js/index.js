POST: http://localhost:3000/monsters
headers:
{
  "Content-Type"; "application/json",
  Accept; "application/json"
}

//body:
{ name: Garrett, age; 200, description; Handsome, white, single, male, muscular}
request.open("GET", "http://localhost:3000/monsters")
request.send();
request.onload = function() {
    if (request.status === 200) {
        let currentVersion = parseFloat(request.responseText);
        versionCallback(null, currentVersion);
    }
    else {
        versionCallback(null, response.responseText);
    }
    };

request.onerror = request.ontimeout = function(e) {
    versionCallback(e.type, null);
};



//parameters:

//_limit=[number] = limit the number of monsters returned
//_page=[number] - offset your request for monsters to some page (must specify a limit)

//example:

GET http://localhost:3000/monsters/?_limit=20&_page=3

response:

[
  {
    "name": "Chronos",
    "age": 4005.302453418598,
    "description": "Effulgence eldritch shunned foetid. Ululate gibbering tenebrous foetid iridescence daemoniac. Stench nameless gambrel. Amorphous furtive iridescence noisome. Foetid mortal nameless.",
    "id": 1
  },
  {
    "name": "Tartarus",
    "age": 1874.4913565609456,
    "description": "Cyclopean swarthy amorphous singular accursed furtive non-euclidean stygian. Swarthy gibbering charnel eldritch daemoniac gibbous. Cyclopean lurk hideous tentacles squamous immemorial tenebrous mortal. Madness tentacles furtive mortal foetid decadent. Foetid immemorial comprehension.",
    "id": 2
  },
  {
    "name": "Hemera",
    "age": 4094.8375978925988,
    "description": "Dank immemorial abnormal gambrel. Cat lurk unutterable. Abnormal tenebrous ululate. Nameless swarthy manuscript eldritch indescribable accursed antediluvian decadent.",
    "id": 3
  }
]