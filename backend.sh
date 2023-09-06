#!/bin/bash
# This is a simple Bash script
python -m venv ./backend/env
source ./backend/env/bin/activate
pip install -r ./backend/requirements.txt
python ./backend/base.py
