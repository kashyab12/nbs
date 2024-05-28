import gi.repository.GLib
import dbus
from dbus.mainloop.glib import DBusGMainLoop

def notifications(bus, message):
    # print(type(message))
    print([str(arg) for arg in message.get_args_list() ])

DBusGMainLoop(set_as_default=True)

bus = dbus.SessionBus()
bus.add_match_string_non_blocking("eavesdrop=true, interface='org.freedesktop.Notifications', member='Notify'")
bus.add_message_filter(notifications)

mainloop = gi.repository.GLib.MainLoop()
mainloop.run()