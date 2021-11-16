import json
import pandas as pd
from konlpy.tag import  Okt
from tqdm import tqdm
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import DBSCAN
import numpy as np
import os


json_list = os.listdir('../news-crawler')
json_files = [file for file in json_list if file.endswith('.json')]  
data = []
df = pd.DataFrame()
for i in json_files:
    for line in open(('../news-crawler/'+i),"r", encoding='utf-8-sig'):
        df = pd.concat([df, pd.DataFrame(json.loads(line), columns=['title', 'content', 'date', 'like'])])  

okt = Okt() 
# okt.analyze  #구(Phrase) 분석
# okt.morphs   #형태소 분석
# okt.nouns    #명사 분석
# okt.pos      #형태소 분석 태깅

noun_list = []
for content in tqdm(df['content']): 
    nouns = okt.nouns(content) # 명사만 추출하기, 결과값은 명사 리스트
    noun_list.append(nouns)
df['nouns'] = noun_list
print(df.head())

# 문서를 명사 집합으로 보고 문서 리스트로 치환 (tfidfVectorizer 인풋 형태를 맞추기 위해)
text = [" ".join(noun) for noun in df['nouns']]

tfidf_vectorizer = TfidfVectorizer(min_df = 5, ngram_range=(1,5))
tfidf_vectorizer.fit(text)
vector = tfidf_vectorizer.transform(text).toarray()

vector = np.array(vector) # Normalizer를 이용해 변환된 벡터
model = DBSCAN(eps=0.3,min_samples=6, metric = "cosine")
# 거리 계산 식으로는 Cosine distance를 이용
result = model.fit_predict(vector)
df['result'] = result

for cluster_num in set(result):
    # -1,0은 노이즈 판별이 났거나 클러스터링이 안된 경우
    if(cluster_num == -1 or cluster_num == 0): 
        continue
    else:
        print("cluster num : {}".format(cluster_num))
        temp_df = df[df['result'] == cluster_num] # cluster num 별로 조회
        for title in temp_df['title']:
            print(title) # 제목으로 살펴보자
        print()