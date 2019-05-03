# Spotify App
- [ ] 

## Description
- [ ] System for searching tracks in Spotify and add them to User playlist.

## Entity definition
- [ ] The main entity of WEB system is a track
- [ ] Entity name is track
- [Track::external_ids String 1-9,147,483,647 symbols]
- [Track:id String 1-9,147,483,647 symbols]
- [Track:is_playable bolean 1 and 0]
- [Track:name String 1-9,147,483,647 symbols]
- [Track:type string 1-9,147,483,647 symbols]
- [Track:popularity int 0-100]
- [Track:duration_ms int 1-2,147,483,647]

## API definition
- [https://api.spotify.com/v1/tracks] - GET Get a Track Return Track
```json
{
  "tracks": [
    {
      "album": {
        "album_type": "single",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
            },
            "href": "https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju",
            "id": "6sFIWsNpZYqfjUpaCgueju",
            "name": "Carly Rae Jepsen",
            "type": "artist",
            "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
          }
        ],
        "available_markets": [
          "AD",
          "AR",
          "AT",
          "ZA"
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/0tGPJ0bkWOUmH7MEOR77qc"
        },
        "href": "https://api.spotify.com/v1/albums/0tGPJ0bkWOUmH7MEOR77qc",
        "id": "0tGPJ0bkWOUmH7MEOR77qc",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/107819f5dc557d5d0a4b216781c6ec1b2f3c5ab2",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/5a73a056d0af707b4119a883d87285feda543fbb",
            "width": 64
          }
        ],
        "name": "Cut To The Feeling",
        "release_date": "2017-05-26",
        "release_date_precision": "day",
        "type": "album",
        "uri": "spotify:album:0tGPJ0bkWOUmH7MEOR77qc"
      },
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
          },
          "href": "https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju",
          "id": "6sFIWsNpZYqfjUpaCgueju",
          "name": "Carly Rae Jepsen",
          "type": "artist",
          "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
        }
      ],
```
- [https://api.spotify.com/v1/me/tracks]  - POST Add Track to User
```json
HTTP/1.1 200 Success
```
- [https://api.spotify.com/v1/search] - GET Get Spotify Catalog information about artists, albums, tracks or playlists that match a keyword string.
```json
{
  "artists": {
    "href": "https://api.spotify.com/v1/search?query=tania+bowra&offset=0&limit=20&type=artist",
    "items": [ {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
      },
      "genres": [ ],
      "href": "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
      "id": "08td7MxkoHQkXnWAYD8d6Q",
      "images": [ {
        "height": 640,
        "url": "https://i.scdn.co/image/f2798ddab0c7b76dc2d270b65c4f67ddef7f6718",
        "width": 640
      }, {
        "height": 300,
        "url": "https://i.scdn.co/image/b414091165ea0f4172089c2fc67bb35aa37cfc55",
        "width": 300
      }, {
        "height": 64,
        "url": "https://i.scdn.co/image/8522fc78be4bf4e83fea8e67bb742e7d3dfe21b4",
        "width": 64
      } ],
      "name": "Tania Bowra",
      "popularity": 0,
      "type": "artist",
      "uri": "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
    } ],
    "limit": 20,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 1
  }
}
```
- [https://api.spotify.com/v1/me] - GET Get Current User's Profile
```json
{"birthdate":"1937-06-01","country":"SE","display_name":"JM Wizzler","email":"email@example.com","external_urls":{"spotify":"https://open.spotify.com/user/wizzler"},"followers":{"href":null,"total":3829},"href":"https://api.spotify.com/v1/users/wizzler","id":"wizzler","images":[{"height":null,"url":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/1970403_10152215092574354_1798272330_n.jpg","width":null}],"product":"premium","type":"user","uri":"spotify:user:wizzler"}
```

## UI definition
- [] https://wireframe.cc/cCPWVw