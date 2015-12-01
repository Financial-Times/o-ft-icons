for entry in svg/*
do
  if ! [ -d demos/local/svg ];then
    mkdir demos/local/svg
  fi

  if [ -f "$entry" ];then
    node 2016/sprite.js --icon="$entry" --colors=000000,333333,777777,b0b0b0,ffffff,2e6e9e,92288f,9e2f50,cc0000,d66d06 > demos/local/"$entry"
  fi
done
