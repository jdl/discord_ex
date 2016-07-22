# Discord Elixir

Discord library for Elixir. I needed it and figured I'd share.

This library is useful for making calls and implementing a bot as well.

Please always use [Discord Developer Docs](https://discordapp.com/developers/docs) as a reference.

## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed as:

  1. Add discord_ex to your list of dependencies in `mix.exs`:

        def deps do
          [{:discord_ex, git: "git@github.com:rmcafee/discord_ex.git", tag: "1.1.3"}]
        end

  2. Ensure discord_ex is started before your application:

        def application do
          [applications: [:discord_ex]]
        end

  3. Look at the examples/echo_bot.ex file and you should honestly be
     good to go.

## Realtime and Bot Client Usage

So you want to create a bot huh? Easy peezy.

1) Create a bot with a default handler to handle any event:

  	# Default Fallback Handler for all events!
  	# This way things don't blow up when you get an event you
  	# have not set up a handler for.

  	def handle_event({event, _payload}, state) do
      IO.puts "Received Event: #{event}"
      {:ok, state}
  	end

2) Setup an event handler to handle whatever event you want:
  	
  	def handle_event({:message_create, payload}, state) do
   	  # Your stuff happens here # 
      {:ok, state}
  	end

3) Now to start your client it is as easy as:

	{:ok, bot_client } = DiscordEx.Client.start_link(%{
		token: <token>,
		handler: YourBotNameHere
	})

Alright you are done. Go forth and prosper!

**As a note your bot_client is a gen_server that will have state properties that contain:**
	
**:rest_client** - you can use this process to make calls without having to setup another rest client connection. So in your callback you can do this in your callback with ease:

	alias DiscordEx.RestClient.Resources.User
	
	User.current(state[:rest_client])


## Voice Client Usage

Keep in mind you will need to have [ffmpeg](https://ffmpeg.org) and [dca-rs](https://github.com/nstafie/dca-rs) installed and accessible from /usr/local/bin to use the audio feature.

**For best results that include easy accessibility and efficient process management include voice information whenoy create your client.**

1) Create a connection with initial voice channel information and voice options:

	{:ok, client} = DiscordEx.Client.start_link(%{
		token: token,
		handler: YourHandler, 
		voice: %{
			guild_id: <guild_id>, 
			channel_id: <initial_channel_id>, 
			self_deaf: false}
	})

2) Now in your handler you can access the voice client in your handlers state.
	
* state[:voice_client]


**If you want to seperate your voice client from the general client:**

1) Create a connection like before. You can attach a bot handler if you wish.

	{:ok, client } = DiscordEx.Client.start_link(%{token: <token>})												       
2) Now create a voice client as you piggy back off the bot.

	{:ok, voice_client} = DiscordEx.Voice.Client.connect(client, %{
		guild_id: <guild_id>,
		channel_id: <channel_id>
	})

**Now just pick the audio file you want to use and play it:**

	DiscordEx.Voice.Controller.play(voice_client,"/path/to/your/audio.wav", %{volumne: 128})

**If you want to stop it so you can play something else just stop it:**

	DiscordEx.Voice.Controller.stop(voice_client)

## REST Client Usage

The easy way to use discord resources is by doing the following.

	# alias the resource you wish to use to make it easy on yourself

	alias DiscordEx.RestClient.Resources.User

	# Establish a connection
	{:ok, connection} = User.login("<username>","<password>")

	# Call on the resource and reap the results

	User.guilds(connection)

If you like going the longer route and obtained your token already - you can use resources like this:

	# Create a connection
	token = "<your-token>"
	{:ok, conn} = DiscordEx.RestClient.start_link(%{token: token})

	# Get to using the resource function for the rest client
	DiscordEx.RestClient.resource(conn, :get, "users/@me/channels")

	# You can also user other method resources like 'post':
	DiscordEx.RestClient.resource(conn, :post, "users/@me/channels", %{recipient_id: <recipient_id>})

The 'resource' function makes it a lot easier to use the library. The following methods are supported.

	DiscordEx.RestClient.resource(conn, :get, <url>)
	DiscordEx.RestClient.resource(conn, :post, <url>, <map-of-data>)
	DiscordEx.RestClient.resource(conn, :put, <url>, <map-of-data>)
	DiscordEx.RestClient.resource(conn, :patch, <url>, <map-of-data>)
	DiscordEx.RestClient.resource(conn, :delete, <url>)


** The following Resources are supported - you can look at their docs for examples and more information: **
  ----

  	alias DiscordEx.RestClient.Resources.Channel

	Channel.bulk_delete_messages/3
	Channel.create_invite/3
	Channel.delete/2
	Channel.delete_message/3
	Channel.delete_permissions/3
	Channel.edit_permissions/4
	Channel.get/2
	Channel.get_invites/2
	Channel.messages/2
	Channel.modify/3
	Channel.send_file/3
	Channel.send_message/3
	Channel.trigger_typing/2
	Channel.update_message/4
	
[channel-resource-doc](DiscordEx.RestClient.Resources.Channel.html)

  ----
  
  	alias DiscordEx.RestClient.Resources.Guild

	Guild.ban_member/4
	Guild.bans/2
	Guild.batch_modify_roles/3
	Guild.begin_prune/3
	Guild.channels/2
	Guild.create/2
	Guild.create_channel/3
	Guild.create_empty_role/2
	Guild.create_integration/3
	Guild.delete/2
	Guild.delete_integration/3
	Guild.delete_role/3
	Guild.embed/2
	Guild.get/2
	Guild.integrations/2
	Guild.invites/2
	Guild.kick_member/3
	Guild.member/3
	Guild.members/3
	Guild.modify/3
	Guild.modify_embed/2
	Guild.modify_integration/4
	Guild.modify_member/4
	Guild.modify_role/4
	Guild.prune_count/3
	Guild.roles/2
	Guild.sync_integration/3
	Guild.unban_member/3
	Guild.voice_regions/2

[guild-resource-doc](DiscordEx.RestClient.Resources.Guild.html)

  ----

	alias DiscordEx.RestClient.Resources.Image

  	Image.avatar_url/2
  	Image.icon_url/2

[image-resource-doc](DiscordEx.RestClient.Resources.Image.html)

  ----

  	alias DiscordEx.RestClient.Resources.Invite

	Invite.accept/2
	Invite.delete/2
	Invite.get/2

[invite-resource-doc](DiscordEx.RestClient.Resources.Invite.html)

  ----

  	alias DiscordEx.RestClient.Resources.User

	User.connections/1
	User.create_dm_channel/2
	User.current/1
	User.dm_channels/1
	User.get/2
	User.guilds/1
	User.leave_guild/2
	User.login/2
	User.logout/1
	User.modify/2
	User.query/3

[user-resource-doc](DiscordEx.RestClient.Resources.User.html)

## TODOS
 
  * Would love more tests!
  * DRY up some similar behaviour.
  * Use it more and more - to see where developer usability can be made better
