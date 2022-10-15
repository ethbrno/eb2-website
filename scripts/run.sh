#!/bin/sh

BUN_BIN=`type -p bun`
NODE_BIN=`type -p node`

for engine in $BUN_BIN $NODE_BIN
do
    if [ -x "$engine" ]
    then
        "$engine" $1
        break
    fi
done
