---
layout: default
title: D02-SHELL SCRIPT
parent: Boost
---
# D02 : shell script


## Shell (쉘 셸 섈 쒤 )
- shell은 명령어와 프로그램을 사용하는 인터페이스이다.
- 커널과 사용자간의 다리 역할을하며 사용자로부터 명령어를 받아 명령어를 해석하고 프로그램을 실행시키는 역할을 한다.
- [[리눅스]셸(Shell)이란? 셸의 변경, 쉘 개념, 기능, 종류와 특징(sh, bash, csh, tcsh, ksh)](https://jhnyang.tistory.com/57)

## Shell Srcipt
- script(스크립트) 란 인터프리트 방식으로 동작하는 컴파일 되지 않고 사용되는 프로그램이다.
- 말그대로 한줄씩 읽어서 동작시키는 방식의 언어
- perl,java,perl 등 script 앞에 붙는 것들은 인터프리트 엔진을 의미한다.
- 이중 javascript는 유명한 스토리이지만 당시 java가 유행해서 이름을 따서 만들었을 뿐 별 의미는 없고, 인터프리트 엔진은 크롬과 같은 웹 브라우저이다.
- 다시 본론으로 돌아가서, shell script의 인터프리트 엔진은 bash shell이므로 shell script로 불린다. 참고로 bash shell은 리눅스의 표준 shell 이다.
- 즉, shell에서 사용하는 커맨드 명령어들로 이루어진 프로그램이 shell script 이며, 때문에 ls,cd 등의 명령어들도 shell script에서 사용가능하다.
- 개인적으로 shell script는 다른 프로그래밍 언어들에 비하여 문법이 굉장히 깐깐하기 때문에 반복적인 숙달이 필요할 것 같다. 그러려면 맥북을 하나...사야..하나... 

## shell script 기본 명령어 정리 

- shell script 실행
  
```jsx
$./shell.sh // shell 실행
```
- shell scirpt 기본 문법 정리
  
```jsx
#!/bin/bash // 아래 스크립트를 bash shell 엔진으로 실행하겠다는 의미

echo "hello world" //출력, 개행
printf "hello world" //출력

count=1 // 변수선언, = 반드시 붙여서
echo ${count} //변수 사용 ${변수명}

//반복문 for
for file in `ls ${folder}`;do  //`ls folder` folder 내부의 파일 이름 추출
		basename=`basename ${file}`
		extension="${basename##*.}"
		if [ ${extension} == "cs" ]; then
			find=1
			zip ${zipName} "./${folder}/${file}"
		fi
	done

// 반복문 while
cnt=0
while ((${cnt}<17));do //변수 연산시 (()) 사용
	echo ${cnt}
done

//파일 전송 
//"~/folder"를 통해 유저의 root로 전송
scp ${zipName} saeeng@192.168.56.1:"~/backup"
```
- 기타 명령어

```jsx
//폴더 생성
mkdir backup

//폴더 권한 설정
chmod 764 backup

//폴더 권한 확인 -al
ls -al
```


## ssh : Secure SHell protocol
- 네트워크 프로토콜 중 하나로 컴퓨터와 컴퓨터가 인터넷과같은 Public network통해 서로 통신할대 보안적으로 안전하게 통신하기 위해 사용하는 프로토콜.
- 일반적으로 github clone 혹은 aws,gcp 같은 외부 인스턴스에 접속할 때 주로 사용한다.
- 포트번호 22
- 비공개키 암호화 기법을 사용하여 보다 안전한 통신이 가능하다.

## ubuntu 환경에서 ssh 사용법

- ssh 서버 오픈
```jsx
//ssh client install
sudo apt install openssh-server
```

- 서버 접속
```jsx
//local 환경에서 virtual 환경의 ssh 접속
ssh portingIP@USER
```


## VM Machine 리눅스 설치 방법

1. lts 버전의 ubuntu.iso 다운로드 (.torrent 이용하여 빠르게 받을 수 있음)
2. virtualBox 에 iso 삽입하여 ubuntu 설치 (설치시 사용자 계정 생성) 

    ![D02%20shell%20script%206ec48a750981401eaf8f17f88439b007/install_ubuntu.png](D02%20shell%20script%206ec48a750981401eaf8f17f88439b007/install_ubuntu.png)



## 리눅스 vs 유닉스

[Linux vs Unix](https://www.diffen.com/difference/Linux_vs_Unix)

[Linux(리눅스)와 Unix(유닉스) 차이](http://blog.naver.com/PostView.nhn?blogId=limoremo&logNo=220533015236)

리눅스 ⇒ 무료 , 개인부터 기업까지, 오픈소스 개발 , BASH , Since 1992

유닉스 ⇒ 유료, 주로 대학 및 기업체, 제조사 개발,  Bourne Shell , Since 1969

요약 : 유닉스는 너무 어려우니 조금 가볍고 사용하기 쉽게 만들어볼까? ⇒ 리눅스



### powershell vs cmd

- powershell → .NET FrameWork 객체로 표현
- cmd에 비하여 powershell이 지원하는 기능이 압도적으로 많다.
- BASH에서 동작하는 echo,ls 등의 명령어도 그대로 사용가능하다.
- 그러나 푸르딩딩한 화면이 싫다

[Windows 10에서 Linux bash shell 사용하는 방법](https://webisfree.com/2017-05-10/window-10%EC%97%90%EC%84%9C-linux-bash-shell-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)


## etc
- shell 스크립트 및 ubuntu 환경에서의 명령어들은 계속적으로 익숙해질 필요가 있는것같다.
- 맥북을 하나 사야...