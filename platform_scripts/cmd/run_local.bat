:: Copyright Epic Games, Inc. All Rights Reserved.

@echo off
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit cd /d "%~dp0"

::if not "%1"=="am_admin" (powershell start -verb runas '%0' am_admin & exit /b)

pushd "%~dp0"

title Cirrus

pushd ..\..

::Install required deps
call powershell -command "%~dp0\setup.ps1"
title 8081
::Run node server
::If running with frontend web server and accessing outside of localhost pass in --publicIp=<ip_of_machine>
node cirrus %*

title 8081

popd

popd

pause

