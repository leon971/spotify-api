# Spotify App
- [ ] 

## Description
- [ ] System for searching tracks in Spotify and add them to User playlist.

## Entity definition
- [ ] The main entity of WEB system is a track
- [ ] Entity name is track
- [Track::external_ids String]
- [Track:id String]
- [Track:is_playable bolean]
- [Track:name String]
- [Track:type string]
- [Track:popularity int 0-100]
- [Track:duration_ms int]

## API definition
- [https://api.spotify.com/v1/tracks] - GET Get a Track Retrun Track
- [https://api.spotify.com/v1/me/tracks]  - POST Add Track to User
- [https://api.spotify.com/v1/me/tracks/contains] - GET Get Track information
- [https://api.spotify.com/v1/me] - GET Get Current User's Profile

## UI definition
- [] https://wireframe.cc/cCPWVw