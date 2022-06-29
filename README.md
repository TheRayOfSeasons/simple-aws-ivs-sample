# Simple AWS IVS Sample

A sample application that streams a channel from AWS IVS.

# Setup

1. Create a channel in AWS. Follow the steps [here](https://docs.aws.amazon.com/ivs/latest/userguide/getting-started-create-channel.html).
2. Download and install OBS. Follow the guide [here](https://docs.aws.amazon.com/ivs/latest/userguide/getting-started-set-up-streaming.html)
3. Create a `.env` then add the following inside:
   ```
   VITE_STREAM_URL=<insert the Playback URL you got from the AWS IVS console>
   ```
4. Install PNPM via `npm i -g pnpm`
5. Go to the project directory then run `pnpm install`.
6. Run `pnpm dev`.
