for entry in svg/*
do
  if [ -f "$entry" ];then
    node 2016/sprite.js --icon="$entry" --colors=000000,333333,777777,b0b0b0,ffffff,2e6e9e,92288f,9e2f50,cc0000,d66d06 > 2016/output/"$entry"
  fi
done
