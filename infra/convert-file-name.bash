#!/bin/bash

search_dir=$1
convert_total_count=0
for full_path in "$search_dir"/*.ts
do
    #echo "$entry"
    base_name=$(basename ${full_path})
    #echo "$base_name"
    # 확장자 제거
    file_name=${base_name%%.ts}

    #대문자 기준으로 문자열 자름
    names=(${file_name//[A-Z]/ }) # delete everything after last dot
    
    #확장자 추출
    ext=${base_name##*.} # delete everything up to last dot

    new_file_name=""

    is_convert=true
    
    for i in "${names[@]}"
    do

        #잘린 문자열 인덱스
        prefix=${file_name%%$i*}

        #잘린 문자열 인덱스 번호
        index=${#prefix}

        #잘린 문자열 인덱스 번호로 해당 문자 가져오기
        startChar=${file_name:`expr $index - 1`:1}

        #시작 문자열이 소문자 일경우 이미 변환된 파일이므로
        #중지
        if [[ "$startChar" =~ [a-z] ]]; then
            is_convert=false
            break
        fi

        #대문자 소문자로 변환
        lower=${startChar,,}
        new_file_name=$new_file_name$lower$i"-"

    done
    #echo "$search_dir/${new_file_name::-1}.$ext"
    if $is_convert ; then
        convert_total_count=$((convert_total_count+1))
        mv "$full_path" "$search_dir/${new_file_name::-1}.$ext"
        echo "convet file : $base_name => ${new_file_name::-1}.$ext"
    fi
done

echo "convert total: $convert_total_count"
