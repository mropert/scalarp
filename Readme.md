scalarp, a LARP at scale manager
========

This project aims to offer LARP management tools at large scale.
It helps LARP organizers by automating some of the in-game requests such as character sheet management.

The basic idea is to use RFID tags to identify players and items and offer an kiosk app that can be deployed on site to manage it all.

Disclaimer
==========

This stuff is not done yet, we're still experimenting a lot.

Requirements
============

For the app:
* Google Chrome
* npm

For nfc_read (used by the app)
* C++14
* CMake 3.0
* libnfc
