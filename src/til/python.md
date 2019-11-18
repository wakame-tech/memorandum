# Python
## 2018/07/12 - 言語処理100本ノック
<http://www.cl.ecei.tohoku.ac.jp/nlp100/> を Python でやる

```python
import re
import random
from functools import reduce
import json

# coding: utf-8
# 00
print("stressed"[::-1])
# 01
print(u"パタトクカシーー"[1::2])
# 02
print(''.join(reduce(lambda a, b: a + b, zip(u"パトカー", u"タクシー"))))
# 03
words = lambda s: re.sub(r",|\.", "", s).split()
print(''.join(str(len(w)) for w in words("Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.")))
# 04
indice = [0, 4, 5, 6, 7, 8, 14, 15, 18]
print(' '.join(w[0] if i in indice else w[0:2] for (i, w) in enumerate(words("Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can."))))
# 05
bi_gram = lambda s: [s[i:i+2] for i in range(0, len(s) - 1)]
print(bi_gram("I am an NLPer"))
print(bi_gram("I am an NLPer".split()))
# 06
x, y = set(bi_gram("paraparaparadise")), set(bi_gram("paragraph"))
print("x or y:{0}\nx and y:{1}\nx \\ y:{2}".format(x.union(y), x.intersection(y), x.difference(y)))
print("se in x: {0} se in y:{1}".format("se" in x, "se" in y))
# 07
templete = lambda x, y, z: u"{0}時の{1}は{2}".format(x, y, z)
print(templete(x = 12, y = u"気温", z = 22.4))
# 08
cipher = lambda input: ''.join(chr(219 - ord(c)) if c.islower() else c for c in input)
print(cipher("I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind ."))
# 09
print(' '.join(w[0] + ''.join(random.sample(w[1:-1], len(w) - 2)) + w[-1] if len(w) > 4 else w for w in words("I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind .")))
# 20
with open('jawiki-country.json', 'r', errors='replace') as f:
    for line in f.readlines():
        json_dict = json.load(line)
        print(json_dict['title'])
```