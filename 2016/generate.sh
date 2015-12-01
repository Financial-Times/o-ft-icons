for entry in svg/*
do
  if [ -f "$entry" ];then
    node 2016/sprite.js --icon="$entry" --colors=fff,555,000 > 2016/output/"$entry"
  fi
done
