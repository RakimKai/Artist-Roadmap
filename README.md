# Spotify Artist Roadmap Web App

## Overview
This web app is built using React and interfaces with the Spotify API. The main functionality of the application is to allow users to input an artist's name and retrieve a roadmap of their albums. Clicking on any particular album will display its tracklist. The styling and layout for this project were created using TailwindCSS.

## Features
- **Search Artist**: Input an artist's name to fetch their album roadmap.
- **Album Roadmap**: Displays a visual representation of all the albums by the searched artist.
- **Tracklist View**: Click on an album from the roadmap to view its tracklist.

## Getting Started

### Prerequisites

- npm
- A Spotify developer account and credentials (Client ID & Client Secret)

### Installation

1. **Clone the Repository**:
   ```
   git clone https://github.com/your-github-username/spotify-artist-roadmap.git
   ```

2. **Navigate to the directory**:
   ```
   cd spotify-artist-roadmap
   ```

3. **Install Dependencies**:
   ```
   npm install
   ```

4. **Setup Spotify Credentials**:

   Rename `.env.example` to `.env` and fill in the appropriate Spotify Client ID and Client Secret.

   ```
   REACT_APP_SPOTIFY_CLIENT_ID=your_client_id
   REACT_APP_SPOTIFY_CLIENT_SECRET=your_client_secret
   ```

5. **Run the App**:
   ```
   npm start
   ```

   The application will run by default on `http://localhost:3000/`.

## Contribution

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## Feedback

If you have any feedback or find any bugs, please open an issue in the repository. All contributions, feedback, and suggestions are welcome!

## License

This project is licensed under the MIT License.

