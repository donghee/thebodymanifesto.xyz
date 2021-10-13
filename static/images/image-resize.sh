#!/bin/bash

mkdir output
mogrify -path output/ -resize 1500x -quality 75 *_*.{jpg,png}
