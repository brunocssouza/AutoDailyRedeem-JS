Set WshShell = CreateObject("WScript.Shell")
cmds=WshShell.RUN("""RUN.BAT PATH IN THIS FOLDER""", 0, True)
Set WshShell = Nothing
Wscript.Quit