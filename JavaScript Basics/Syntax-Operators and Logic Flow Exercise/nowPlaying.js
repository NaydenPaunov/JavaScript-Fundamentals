function nowPlaying(params) {
    let trackName = params[0]
    let name = params[1]
    let duration = params[2]

    console.log(`Now Playing: ${name} - ${trackName} [${duration}]`)
}