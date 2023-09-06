#!/bin/bash
chmod +x frontend.sh
chmod +x backend.sh
./backend.sh &
./frontend.sh &
wait

