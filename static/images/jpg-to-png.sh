#!/bin/bash

for image in *.jpg ;  do convert "$image" "${image%.*}.png"; done
