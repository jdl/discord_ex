sidebarNodes={"exceptions":[],"extras":[{"id":"api-reference","title":"API Reference","headers":[]},{"id":"readme","title":"Discord Elixir","headers":[{"id":" Installation","anchor":"installation"},{"id":" Realtime and Bot Client Usage","anchor":"realtime-and-bot-client-usage"},{"id":" Voice Client Usage","anchor":"voice-client-usage"},{"id":" REST Client Usage","anchor":"rest-client-usage"}]}],"modules":[{"id":"DiscordEx","title":"DiscordEx","functions":[{"id":"bot_auth_url/2","anchor":"bot_auth_url/2"},{"id":"discord_url/0","anchor":"discord_url/0"}]},{"id":"DiscordEx.Client","title":"DiscordEx.Client","functions":[{"id":"_voice_setup_gather_data/3","anchor":"_voice_setup_gather_data/3"},{"id":"handle_event/2","anchor":"handle_event/2"},{"id":"identify/1","anchor":"identify/1"},{"id":"init/2","anchor":"init/2"},{"id":"opcodes/0","anchor":"opcodes/0"},{"id":"socket_url/1","anchor":"socket_url/1"},{"id":"start_link/1","anchor":"start_link/1"},{"id":"voice_state_update/5","anchor":"voice_state_update/5"},{"id":"websocket_handle/3","anchor":"websocket_handle/3"},{"id":"websocket_info/3","anchor":"websocket_info/3"},{"id":"websocket_terminate/3","anchor":"websocket_terminate/3"}]},{"id":"DiscordEx.Client.Helpers.MessageHelper","title":"DiscordEx.Client.Helpers.MessageHelper","functions":[{"id":"actionable_message_for?/3","anchor":"actionable_message_for?/3"},{"id":"msg_command_parse/1","anchor":"msg_command_parse/1"}]},{"id":"DiscordEx.Client.Utility","title":"DiscordEx.Client.Utility","functions":[{"id":"agent_update/2","anchor":"agent_update/2"},{"id":"agent_value/1","anchor":"agent_value/1"},{"id":"normalize_atom/1","anchor":"normalize_atom/1"},{"id":"opcode/2","anchor":"opcode/2"},{"id":"payload_build/4","anchor":"payload_build/4"},{"id":"payload_build_json/4","anchor":"payload_build_json/4"},{"id":"payload_decode/2","anchor":"payload_decode/2"}]},{"id":"DiscordEx.Connections.REST","title":"DiscordEx.Connections.REST","functions":[{"id":"delete/3","anchor":"delete/3"},{"id":"delete!/3","anchor":"delete!/3"},{"id":"get/3","anchor":"get/3"},{"id":"get!/3","anchor":"get!/3"},{"id":"head/3","anchor":"head/3"},{"id":"head!/3","anchor":"head!/3"},{"id":"options/3","anchor":"options/3"},{"id":"options!/3","anchor":"options!/3"},{"id":"patch/4","anchor":"patch/4"},{"id":"patch!/4","anchor":"patch!/4"},{"id":"post/4","anchor":"post/4"},{"id":"post!/4","anchor":"post!/4"},{"id":"process_url/1","anchor":"process_url/1"},{"id":"put/4","anchor":"put/4"},{"id":"put!/4","anchor":"put!/4"},{"id":"request/5","anchor":"request/5"},{"id":"request!/5","anchor":"request!/5"},{"id":"start/0","anchor":"start/0"}],"types":[{"id":"body/0","anchor":"t:body/0"},{"id":"headers/0","anchor":"t:headers/0"}]},{"id":"DiscordEx.EchoBot","title":"DiscordEx.EchoBot","functions":[{"id":"handle_event/2","anchor":"handle_event/2"}]},{"id":"DiscordEx.Permissions","title":"DiscordEx.Permissions","functions":[{"id":"add/2","anchor":"add/2"},{"id":"remove/2","anchor":"remove/2"},{"id":"to_map/1","anchor":"to_map/1"}]},{"id":"DiscordEx.RestClient","title":"DiscordEx.RestClient","functions":[{"id":"init/2","anchor":"init/2"},{"id":"resource/4","anchor":"resource/4"},{"id":"start_link/1","anchor":"start_link/1"}],"types":[{"id":"request_reply/0","anchor":"t:request_reply/0"}]},{"id":"DiscordEx.RestClient.Resources.Channel","title":"DiscordEx.RestClient.Resources.Channel","functions":[{"id":"bulk_delete_messages/3","anchor":"bulk_delete_messages/3"},{"id":"create_invite/3","anchor":"create_invite/3"},{"id":"delete/2","anchor":"delete/2"},{"id":"delete_message/3","anchor":"delete_message/3"},{"id":"delete_permissions/3","anchor":"delete_permissions/3"},{"id":"edit_permissions/4","anchor":"edit_permissions/4"},{"id":"get/2","anchor":"get/2"},{"id":"get_invites/2","anchor":"get_invites/2"},{"id":"messages/2","anchor":"messages/2"},{"id":"modify/3","anchor":"modify/3"},{"id":"send_file/3","anchor":"send_file/3"},{"id":"send_message/3","anchor":"send_message/3"},{"id":"trigger_typing/2","anchor":"trigger_typing/2"},{"id":"update_message/4","anchor":"update_message/4"}]},{"id":"DiscordEx.RestClient.Resources.Guild","title":"DiscordEx.RestClient.Resources.Guild","functions":[{"id":"ban_member/4","anchor":"ban_member/4"},{"id":"bans/2","anchor":"bans/2"},{"id":"batch_modify_roles/3","anchor":"batch_modify_roles/3"},{"id":"begin_prune/3","anchor":"begin_prune/3"},{"id":"channels/2","anchor":"channels/2"},{"id":"create/2","anchor":"create/2"},{"id":"create_channel/3","anchor":"create_channel/3"},{"id":"create_empty_role/2","anchor":"create_empty_role/2"},{"id":"create_integration/3","anchor":"create_integration/3"},{"id":"delete/2","anchor":"delete/2"},{"id":"delete_integration/3","anchor":"delete_integration/3"},{"id":"delete_role/3","anchor":"delete_role/3"},{"id":"embed/2","anchor":"embed/2"},{"id":"get/2","anchor":"get/2"},{"id":"integrations/2","anchor":"integrations/2"},{"id":"invites/2","anchor":"invites/2"},{"id":"kick_member/3","anchor":"kick_member/3"},{"id":"member/3","anchor":"member/3"},{"id":"members/3","anchor":"members/3"},{"id":"modify/3","anchor":"modify/3"},{"id":"modify_embed/2","anchor":"modify_embed/2"},{"id":"modify_integration/4","anchor":"modify_integration/4"},{"id":"modify_member/4","anchor":"modify_member/4"},{"id":"modify_role/4","anchor":"modify_role/4"},{"id":"prune_count/3","anchor":"prune_count/3"},{"id":"roles/2","anchor":"roles/2"},{"id":"sync_integration/3","anchor":"sync_integration/3"},{"id":"unban_member/3","anchor":"unban_member/3"},{"id":"voice_regions/2","anchor":"voice_regions/2"}]},{"id":"DiscordEx.RestClient.Resources.Image","title":"DiscordEx.RestClient.Resources.Image","functions":[{"id":"avatar_url/2","anchor":"avatar_url/2"},{"id":"icon_url/2","anchor":"icon_url/2"}]},{"id":"DiscordEx.RestClient.Resources.Invite","title":"DiscordEx.RestClient.Resources.Invite","functions":[{"id":"accept/2","anchor":"accept/2"},{"id":"delete/2","anchor":"delete/2"},{"id":"get/2","anchor":"get/2"}]},{"id":"DiscordEx.RestClient.Resources.User","title":"DiscordEx.RestClient.Resources.User","functions":[{"id":"connections/1","anchor":"connections/1"},{"id":"create_dm_channel/2","anchor":"create_dm_channel/2"},{"id":"current/1","anchor":"current/1"},{"id":"dm_channels/1","anchor":"dm_channels/1"},{"id":"get/2","anchor":"get/2"},{"id":"guilds/1","anchor":"guilds/1"},{"id":"leave_guild/2","anchor":"leave_guild/2"},{"id":"login/2","anchor":"login/2"},{"id":"logout/1","anchor":"logout/1"},{"id":"modify/2","anchor":"modify/2"},{"id":"query/3","anchor":"query/3"}]},{"id":"DiscordEx.Voice.Buffer","title":"DiscordEx.Voice.Buffer","functions":[{"id":"drain/4","anchor":"drain/4"},{"id":"drain_dca/3","anchor":"drain_dca/3"},{"id":"dump/1","anchor":"dump/1"},{"id":"read/2","anchor":"read/2"},{"id":"read/3","anchor":"read/3"},{"id":"size/1","anchor":"size/1"},{"id":"start/0","anchor":"start/0"},{"id":"write/2","anchor":"write/2"}]},{"id":"DiscordEx.Voice.Client","title":"DiscordEx.Voice.Client","functions":[{"id":"connect/2","anchor":"connect/2"},{"id":"disconnect/1","anchor":"disconnect/1"},{"id":"handle_event/2","anchor":"handle_event/2"},{"id":"identify/1","anchor":"identify/1"},{"id":"init/2","anchor":"init/2"},{"id":"opcodes/0","anchor":"opcodes/0"},{"id":"reconnect/2","anchor":"reconnect/2"},{"id":"socket_url/1","anchor":"socket_url/1"},{"id":"start_link/1","anchor":"start_link/1"},{"id":"websocket_handle/3","anchor":"websocket_handle/3"},{"id":"websocket_info/3","anchor":"websocket_info/3"},{"id":"websocket_terminate/3","anchor":"websocket_terminate/3"}]},{"id":"DiscordEx.Voice.Controller","title":"DiscordEx.Voice.Controller","functions":[{"id":"listen_socket/1","anchor":"listen_socket/1"},{"id":"play/3","anchor":"play/3"},{"id":"start/1","anchor":"start/1"},{"id":"stop/1","anchor":"stop/1"}]},{"id":"DiscordEx.Voice.Encoder","title":"DiscordEx.Voice.Encoder","functions":[{"id":"encode_file/2","anchor":"encode_file/2"}]},{"id":"DiscordEx.Voice.UDP","title":"DiscordEx.Voice.UDP","functions":[{"id":"self_discovery/3","anchor":"self_discovery/3"},{"id":"send_audio/4","anchor":"send_audio/4"}]}],"protocols":[]}