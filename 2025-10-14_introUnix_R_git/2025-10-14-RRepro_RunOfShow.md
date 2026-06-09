\-----------------------------------------------------------------------------------------------------------  
**University of Idaho IMCI Presents**  
**Software Carpentries: Git, R, and Unix for Reproducible Scientific Analysis**  
October 14-30, T/Th, 3-5:30 pm: Room number is IRIC352  
\-----------------------------------------------------------------------------------------------------------

### Helpful Links

Code of conduct:  
[https://docs.carpentries.org/topic\_folders/policies/code-of-conduct.html](https://docs.carpentries.org/topic_folders/policies/code-of-conduct.html)

IMCI main page:   
[https://imci.uidaho.edu/data-carpentries-training](https://imci.uidaho.edu/data-carpentries-training/)

Workshop Zoom link:   
https://uidaho.zoom.us/j/89245204577  
Passcode: 121279

Zoom Recordings  
Day 1 \- [https://uidaho.zoom.us/rec/share/WPuglBlGyS3GoGwAzk\_WRtVZgJ7v0tbuMyGeRqmApJsLv5BfTjg-EJfpmSMGHCY6.zJ1PMoOdG7LG2haM?startTime=1760479462000](https://uidaho.zoom.us/rec/share/WPuglBlGyS3GoGwAzk_WRtVZgJ7v0tbuMyGeRqmApJsLv5BfTjg-EJfpmSMGHCY6.zJ1PMoOdG7LG2haM?startTime=1760479462000)  
Day 2 \-   
[https://uidaho.zoom.us/rec/share/ORt5TT6Ux5QKnsjYi4OHZwiympX7KxL1Di74dL8V3g\_dOe6rZy5b4sp3\_YWW9NM.ekatDtJ235iPTg4G](https://uidaho.zoom.us/rec/share/ORt5TT6Ux5QKnsjYi4OHZwiympX7KxL1Di74dL8V3g_dOe6rZy5b4sp3_YWW9NM.ekatDtJ235iPTg4G)  
Day 3 \-   
Day 4 \-[https://uidaho.zoom.us/rec/share/MnuDL09up0eTAJLDWuvH7-RoTwXQSoaA9RAqY3hnf0FL7dH11C0HEceVa1wJ-NXQ.HEVM-4TyK4EED1cP](https://uidaho.zoom.us/rec/share/MnuDL09up0eTAJLDWuvH7-RoTwXQSoaA9RAqY3hnf0FL7dH11C0HEceVa1wJ-NXQ.HEVM-4TyK4EED1cP)  
Day 5 \- [https://uidaho.zoom.us/rec/share/ulfNGT-kL86rFkML2H1Ylcp9k6g7voQ79N6duGq40m5xS90SQpPAqI1Om4k5Aqcn.wDN6\_gRfrLb-B3zY](https://uidaho.zoom.us/rec/share/ulfNGT-kL86rFkML2H1Ylcp9k6g7voQ79N6duGq40m5xS90SQpPAqI1Om4k5Aqcn.wDN6_gRfrLb-B3zY)  
Day 6 \- [https://uidaho.zoom.us/rec/share/j6FcPdwfnGRE9rTuhSZHbcwpqjYI-P09AFil94T1IFzTG-f2sXFNH85QO30lfjKa.tWpufbJQiGcJSJ2y](https://uidaho.zoom.us/rec/share/j6FcPdwfnGRE9rTuhSZHbcwpqjYI-P09AFil94T1IFzTG-f2sXFNH85QO30lfjKa.tWpufbJQiGcJSJ2y)

### **Day 1 \- Learning unix command basics**

Links:  
\-WSL: [https://learn.microsoft.com/en-us/windows/wsl/install](https://learn.microsoft.com/en-us/windows/wsl/install)  
\-Git for Windows: [https://carpentries.github.io/workshop-template/install\_instructions/\#shell](https://carpentries.github.io/workshop-template/install_instructions/#shell)  
\-Carpentries lesson: [https://swcarpentry.github.io/shell-novice/01-intro.html](https://swcarpentry.github.io/shell-novice/01-intro.html)  
\-Data: [shell-lesson-data.zip](https://swcarpentry.github.io/shell-novice/data/shell-lesson-data.zip)  
\-LessonZero: [https://t./ly/Cc-K4](https://docs.google.com/presentation/d/1Bz94WlNMzb084YJ2mYMR-UYnByCmAFMFvlA-lavwL3Y/edit?usp=sharing)

Objectives

* Explain how the shell relates to the keyboard, the screen, the operating system, and users’ programs  
* Explain when and why command-line interfaces should be used instead of graphical interfaces  
* Explain the similarities and differences between a file and a directory  
* Translate an absolute path into a relative path (and vice versa)  
* Use options and arguments to change the behavior of a shell command  
* Demonstrate the use of tab completion and le its advantages

Learning unix command basics  
$ |  
	prompt (hey\! It’s working\!)   
$ ls  
	What is returned?  
 	This is your home directory.  
	\*Windows folks have some extra steps.   
	$ cd /mnt/c/\<user name\>  
$ ks   
What is returned?  
$ pwd  
	This command is “print working directory”  
$ cd /   
	This command is “change directory”

$ cd /mnt/c    \#if you’re using WSL, your windows files will be here….I think  
$ cd  
	Shortcut to go back to home directory  
$ cd \~/  
	Another shortcut to go back to home directory

$ cd Desktop/shell-lesson-data/exercise\_data  
**TIP: Use “tab complete”. Practice this or you’ll never be able to keep up.**   
Try misspelling something  
$ cd Desktap/shell-lesson-data           \#what happens?

Using “..” to move between directories.  
$ cd ..  
	This moves your current working directory up one level.  
$ cd exercise-data

**TIP: use up and down arrows to access command history**

Problem: Predict what this command will do. What directory will this move you to?  
$ cd ../..

$ cd /  
Problem: Come up with two ways to navigate back to the directory containing the workshop data.  
	$ cd Users/jvanleuven/Desktop/shell-lesson-data  
	$ cd \~/Desktop/shell-lesson-data  
	$ cd \-

$ ls \-l  
	This is called a flag. It is how you change the options for running the program ls.	  
$ ls \-lF  
	The “/” means that it is a folder

$ clear  
$ man ls  
	Use up and down arrows to navigate.  
Press “q” to exit program manual.  
	Can also google “man ls”  
$ ls \-lah  
Problem \#1: Use the manual to determine how to add color to the output of ls.  
$ ls \-G

Why is this useful. Lets skip ahead just a bit. Going to make a list of directories.  
$ ls \-F   
$ ls \-F | grep \\/ \> directories.txt  
	The “|” is called a pipe. It redirects output into another command (instead of the standard output “stdout”)  
	The command “grep” is search command (think “find”). We’re telling it to look for “/”.   
The “\>” is a output operator. It writes the output of ls to a new file called “directories.txt”.  
	Now, using your file browser, so open up “directories.txt”

Discussion topic: what does “.txt” mean? Talk about it with your neighbors. What are some other extensions that you’ve come across?

Explore other ways to look at files  
$ head directories.txt   
$ tail directories.txt  
$ less directories.txt           \#\#\#use q to exit  
$ more directories.txt

Look at properties of multiple files  
$ cd \~/Desktop/shell-lesson-data/north-pacific-gyre  
$ wc \-l NENE01736A.txt  
$ wc \-l \*.txt       \#wildcard “\*” character matches anything. So all files ending in “.txt”

Let’s experiment with absolute vs. relative paths a bit. What have we been doing thus far? Test these two commands and compare the output.  
$ pwd  
$ ls  
$ ls /Users/jvanleuven/  
$ ls \~/  
$ cd \~/Desktop/shell-lesson-data   
$ head \-5 exercise-data/directories.txt    \#\#\# what does the flag do?  
$ head \-5 directories.txt   \#why doesn’t this work?  
$ head \-5 \~/Desktop/shell-lesson-data/excersise-data/directories.txt  
$ rm directories.txt

### 

### **Day 2 \- Working With Files & Directories**

Review from day 1:  
	\-Intro to unix arguments  
	\-paths and directory structure  
\-view files

Goals for day 2:  
	\-create/manipulate directories and files  
	\-nano  
	\-moving towards being able to write sets of commands to run 

$ cd \~/Desktop/  
$ rm \-r shell-lesson-data  
$ wget [https://swcarpentry.github.io/shell-novice/data/shell-lesson-data.zip](https://swcarpentry.github.io/shell-novice/data/shell-lesson-data.zip)  
$ unzip shell-lesson-data.zip  
$ cd shell-lesson-data  
$ mkdir thesis       \#mkdir command  
$ ls \-F

Practice: Try making a directory like “Thesis version1”. What happens? Remember our naming conventions. 

$ rm \-r thesis version1            \#must use the “recursive” flag with directories. This will remove   
everything in the directory.

$ mkdir thesis\_v1  
$ cd thesis\_v1

Make files  
We already tested one way to make a file (“\>”). Now we will try a text editor. There are lots of these. One that comes with unix is called “nano”  
$ nano draft.txt  
Write something, save the file, and exit. 

Lets talk about file extensions just a bit.   
$ cp draft.txt draft.fasta  
$ cp draft.txt draft.mp3  
Open these files and see if they look any different.

$ mkdir oldversions  
$ mv draft.txt oldversions/  
$ cp oldversions/draft.txt .  
$ nano draft.txt  
Now, write some critiques that your advisor would say. Save the file.

One more way to make files:  
$ echo This is my final draft  
$ echo This is my final draft \> thesis\_final.txt  
$ echo This is my final draft \>\> thesis\_final.txt    \#\#double carats append stuff instead of writing over it

Lets practice manipulating multiple files at once.  
$ cd north-pacific-gyre  
$ mkdir rawdata

Practice: How might we make copies of all the raw data (txt files)?  
All these do the same thing:  
$ cp \*.txt raw/  
$ cp NEN\* raw/  
$ cp N\*txt raw/

Wildcards work on folders as well.  
$ cp \*/\*.txt all\_text/  
$ cd all\_text/  
$ ls  
$ rm \-r all\_text

Wildcart (“\*”) is not the only way to match file/folder names. 

? matches any single character. For example;

$ cd ../thesis  
$ cp draft.txt draft\_v1.txt  
$ cp draft.txt draft\_v2.txt  
$ cp draft.txt draft\_v3.txt  
$ cp draft.txt draft\_v11.txt  
$ cp draft.txt draft\_v12.txt  
$ cp draft.txt draft\_v13.txt

$ mkdir old  
$ mv draft\_v?.txt old   
$ ls old  
$ rm \-r old

Navigate to the “exercise-data/alkanes” directory. This directory contains \*.pdb files. These are atomic coordinate position files, often from crystallography. 

$ wc \-l \*.pdb  
Try without the \-l flag  
$ wc \*.pdb         \#lines, words, characters  
$ wc \-l \*.pdb \> lengths.txt  
$ less lengths.txt

Practice problem: Create a new version of lengths.txt that does not include the totals at the end. Hint: Remember head and pipe.   
$ wc \-l \*.pdb | head \-6 \> lengths.txt  
$ less lengths.txt  
$ sort \-n lengths.txt

We will learn a couple of more commands and start combining things.  
$ cd ../exercise-data/animal-counts  
$ less animals.csv  
$ cut \-d , \-f 2 animals.csv     
\# the flag \-d mean “delimited”  
\# the second input “,” means that cut will separate columns by commas  
\# the third input “-f 2” specifies the second column

Notice that there are some duplicate animals. Can get rid of them with “uniq”, but need to also sort  
$ cut \-d , \-f 2 animals.csv | sort | uniq  
$ cut \-d , \-f 2 animals.csv | sort | uniq \-c

File permissions \-  
$ cd ../north-pacific-gyre  
$ ls  
$ less [goodiff.sh](http://goodiff.sh)

\# This is a shell script. Do you recognize any of the commonads?  
\# At the top is the shebang line. It identifies the “interpreter” or program to run the script.  
\# You can check this with the “which” command

$ which bash  
$ which python  
$ which R

Notice that if you try to run “[gooddiff.sh](http://gooddiff.sh)” without specifying what program, it does not tab complete. Lets fix that by making the file “executable”. The command is “chmod”

$ ls \-lh  
$ chmod \+x \*.sh  
$ ls \-lh  
$ ./[goodiff.sh](http://goodiff.sh)

### **Day 3 \- Loops & Shell Scripts**

**Lesson 1 \- Loops**

* [**Commands used/ lesson plan**](https://swcarpentry.github.io/shell-novice/05-loop.html)  
* Working directory: ../exercise-data/creatures

**Review from last week:**  
File & Directory Basics

* mkdir \- create directories (avoid spaces in names\!)  
* rm \-r \- remove directories (recursive flag required)  
* nano \- text editor for creating/editing files  
* mv \- move files or rename them  
* cp \- copy files

Creating Files

* nano filename.txt \- create/edit with text editor  
* echo "text" \> file.txt \- create file with output redirection  
* echo "text" \>\> file.txt \- append to file (won’t overwrite)

Wildcards for Batch Operations

* \* \- matches any number of characters (\*.txt, NENE\*)  
* ? \- matches single character (draft\_v?.txt matches v1, v2, v3 but not v11)  
* Works on files AND directories: \*/\*.txt

Inspecting Files

* wc \- count lines, words, characters  
* wc \-l \- count lines only  
* head / tail \- view beginning/end of files  
* less \- scroll through files

Processing Data

* sort \- sort lines (sort \-n for numerical)  
* cut \-d , \-f 2 \- extract columns (delimiter, field number)  
* uniq \- remove duplicate adjacent lines (use with sort)  
* uniq \-c \- count occurrences

Combining Commands with Pipes

* | chains commands: cut \-d , \-f 2 file.csv | sort | uniq \-c  
* \> saves output to file: wc \-l \*.pdb \> lengths.txt

---

**Key Concept:** Commands are building blocks. Combine them with pipes (|) to create powerful workflows\!

Learning Objectives

* Write loops to process multiple files automatically  
* Understand how loop variables work

Section 1 \- Loop Basics

| Questions | Code | Comments |
| :---- | :---- | :---- |
| Navigate to creatures folder & view the files in there  | $ cd exercise-data/creatures/ $ ls    basilisk.dat  minotaur.dat  unicorn.dat |  |
| Let’s have a look at the file structure of these creatures | $ head \-n 5 basilisk.dat minotaur.dat unicorn.dat    \==\> basilisk.dat \<==    COMMON NAME: basilisk    CLASSIFICATION: basiliscus vulgaris    UPDATED: 1745-05-02    CCCCAACGAG    GAAACAGATC |   |
| Is there a way to shorten this command?? | $ head \-n 5 \*.dat  | A wild wildcard has appeared\! |
| What if you wanted to print out the **classification** (second row) for each species?  | $ head \-n 2 basilisk.dat minotaur.dat unicorn.dat | tail \-n 1    CLASSIFICATION: equus monoceros | Ooops, only unicorns\!  |
| Let’s loop instead\!  | $ for filename in \*.dat \> do \> echo $filename \> head \-n 2 $filename | tail \-n 1 \> done    basilisk.dat    CLASSIFICATION: basiliscus vulgaris    minotaur.dat    CLASSIFICATION: bos hominus    unicorn.dat    CLASSIFICATION: equus monoceros | This is a multi-line version |
| Let’s try a one-line version | $ for filename in \*.dat; do echo $filename head \-n 2 $ filename |tail \-n 1; done    basilisk.dat head \-n 2 basilisk.dat    minotaur.dat head \-n 2 minotaur.dat    unicorn.dat head \-n 2 unicorn.dat  | Use a semicolon **After** the list **Between** commands inside loop **Before** *done* |

Some notes on one-line vs multiple-line  
If you aren’t sure where your semicolons go, but you’ve done the multiple-line loop already, just hit the up arrow\! It shows you your multiple-line loop in one single line with the semicolons\! 

Some notes on symbols with different meanings  
\> as a shell prompt vs redirect output  
$ as a shell prompt vs value of a variable

If the shell prints \> or $ then it expects you to type something (prompt)  
If you type \> or $, you are instructing the shell to redirect output or get the value of variable (instruction)

**Practice Time\!**  
How would you write a loop that echoes all 10 numbers from 0 to 9?

| FRUSTRATING MODE for loop\_variable in 0 1 2 3 4 5 6 7 8 9 \> do \> echo $loop\_variable \> done | LESS FRUSTRATING MODE for loop\_variable in {0..9}; do echo $loop\_variable; done  |
| :---- | :---- |

In the second example, we used {0..9} in place of typing the entire string of numbers. The {} is a brace expansion \- shell shortcut that automatically generates a sequence. 

Navigate to /extras & open brace\_expansion.sh   
Examples

| Create numbered directories  | $ for i in {1..10; do mkdir experiment\_$i; done |
| :---- | :---- |
| Process files with numbers | $ for num in {01..2}; do echo “Processing month\_$num.txt”; done |
| Countdown timer | $ for i in {10..1}; do echo $i; sleep 1; done; echo “Blastoff\!” |

**Challenge Time\!**  
Change directory to /exercise-data/alkanes & look at the \*pdb files in there  
cubane.pdb  ethane.pdb  methane.pdb  octane.pdb  pentane.pdb  propane.pdb

| Command | Output |
| :---- | :---- |
| $ for datafile in \*.pdb; do ls **\*.pdb**; done | cubane.pdb  ethane.pdb  methane.pdb  octane.pdb  pentane.pdb  propane.pdb cubane.pdb  ethane.pdb  methane.pdb  octane.pdb  pentane.pdb  propane.pdb cubane.pdb  ethane.pdb  methane.pdb  octane.pdb  pentane.pdb  propane.pdb cubane.pdb  ethane.pdb  methane.pdb  octane.pdb  pentane.pdb  propane.pdb cubane.pdb  ethane.pdb  methane.pdb  octane.pdb  pentane.pdb  propane.pdb cubane.pdb  ethane.pdb  methane.pdb  octane.pdb  pentane.pdb  propane.pdb |
| $ for datafile in \*.pdb; do ls **$datafile**; done  | cubane.pdb ethane.pdb methane.pdb octane.pdb pentane.pdb propane.pdb |

In the first instance, the shell expands \*.pdb to ALL 6 files \- listing the contents six times \- You didn’t use your variable\!  
In the second instance, you use the $datafile (variable) so the loop runs six times 

Limiting Sets of Files

| $ for filename in c\*; do ls $filename; done | Wildcard position matters  c\* means c at the start Starts with a c and then no more characters |
| :---- | :---- |

Limiting Sets of Files \- Part 2

| $ for filename in \*c\*; do ls $filename; done | Wildcard position matters \*c\* means c ANYWHERE in the filename |
| :---- | :---- |

Saving to a File in a Loop \- Part 1

| $ for alkanes in \*.pdb;  do  echo $alkanes; cat $alkanes \> alkanes.pdb; done | The text from each file is written to alkanes.pdb HOWEVER it gets overwritten on each loop iteration (sad) |
| :---- | :---- |

Saving to a File in a Loop \- Part 2

| $ for datafile in \*.pdb; do cat $datafile \>\> all.pdb; done | \>\> appends to a file instead of overwriting it with the redirected output |
| :---- | :---- |

Patterns \- go back to /creatures dir

| Code | Comments |
| :---- | :---- |
| $ for filename in \*.dat; do echo $filename; head \-n 100 $filename | tail \-n 20; done   | This is the power move \- process all files matching a pattern and returning output |

Spaces in Names

| $ for filename in "cool basilisk.dat" "pink unicorn.dat"; do head \-n 100 "$filename" | tail \-n 20; done  | Spaces are used to separate elements of the list we are going to loop over, however you need to surround it with “” |
| :---- | :---- |

Copying Files With A Loop \- copying files to make a backup for later

| Code | Output | Comments |
| :---- | :---- | :---- |
| $ cp \*.dat original-\*.dat | cp: target 'original-\*.dat' is not a directory  | cp is expecting two arguments however, the last input was not a directory where it could copy the file \- Try looping instead\! |
| $ for filename in \*.dat \> do \> cp $filename original-$filename \> done  | none ls to see the new original- files | cp command is run once for each file name |

Let’s try copying into a new directory WITH echo statements\!

| $ mkdir backups $ for filename in \*.dat \> do \> echo cp $filename backups/original-$filename \> done | cp basilisk.dat backups/original-basilisk.dat cp minotaur.dat backups/original-minotaur.dat cp unicorn.dat backups/original-unicorn.dat  | Made a directory for the copied files to go into Added prefix original- to the files and copied them into the backups directory |
| :---- | :---- | :---- |

**Challenge\! Nested Loops**  
Set up a directory structure to organize some experiments measuring reaction rate constants with different compounds and different temperatures.   
ls

| code | comments |
| :---- | :---- |
| $ for species in cubane ethane methane \> do \> for temperature in 25 30 37 40 \> do \> mkdir $species-$temperature \> done \> done   | Creates 12 directories with combined names Outer loop \- runs three times (once per species) Inner loop \- For EACH species runs four times for each temperature |

**Let’s Kick It Up By Adding a Shell Script To Each New Directory\!**

| code | comments |
| :---- | :---- |
| $ for species in octane pentane propane \> do \> mkdir $species \> for temperature in 25 30 37 40 \> do \> mkdir $species/$temperature \> touch $species/$temperature/experiment.sh \> done \> done  | Creates 12 directories with combined names Outer loop \- runs three times (once per species) Inner loop \- For EACH species runs four times for each temperature AND adds an empty experiment.sh file in each temperature folder using the touch command |

Touch was originally designed to update the modification timestamp of existing files BUT now it’s mostly used to create empty files

**Lesson 2 \- Shell Scripts**

* [**Commands used/ lesson plan**](https://swcarpentry.github.io/shell-novice/instructor/06-script.html)  
* Working directory (unless otherwise specified)

**Shell Scripts**

Navigate to /alkanes dir  
Let’s make a shell script\! So Excited\!

| $ nano middle.sh | This command opens the file [middle.sh](http://middle.sh) It will create the file if it doesn’t already exist  nano is a text editor \- we can use it to directly edit the file  |
| :---- | :---- |
| \#\!/bin/bash head \-n 15 octane.pdb | tail \-n 5 | This tells you it is a bash script This pipe will select lines 11-15 of the octane.pdb file Save the file (Ctrl O) Exit the text editor (Ctrl X)  |
| $ ls \-lh [middle.sh](http://middle.sh)  \-rw-r--r-- 1 elin1473 grad 46 Oct 21     13:12 middle.sh  | Owner (elin1473) rw- (can read & write but not execute) Group (grad?) r– (can read but not write or execute) Others (everyone else) r– (can read but not write or execute) |
| $ chmod \+x [middle.sh](http://middle.sh) \-rwxr-xr-x 1 elin1473 grad 46 Oct 21 13:12 middle.sh | Let’s make the script executable\! |
| $ ./middle.sh | Execute the command |
| $ head \-n octane.pdb | tail \-n 5 | Exactly the Same\!  |

Aight, what if we want to select lines from arbitrary files? Opening and editing [middle.sh](http://middle.sh) would be a PITA and not efficient. So, let’s modify the line to make it more versatile

| $ nano middle.sh |  |
| :---- | :---- |
| head \-n 15 “$1” | tail \-n 5 | Inside a shell script, $1 means the first filename (or other argument) on the command line Note the $1 is surrounded by “” \- That’s incase there are spaces in the file name |
| Ctrl-O | Save |
| Ctrl-X | Exit |
| $ ./[middle.sh](http://middle.sh) octane.pdb |  |

Aight, we would still need to edit our script each time we want to adjust the range of lines that is returned. We can fixt that to use three command-line arguments. 

| $ nano middle.sh |  |
| :---- | :---- |
| head \-n “$2” “$1” | tail \-n “$3” | “$1” first argument (file) “$2” second argument (number of lines for head) “$3” third argument (number of lines for tail)  Save & Exit |
| $ bash [middle.sh](http://middle.sh) pentane.pdb 15 5 |  |
| $ bash [middle.sh](http://middle.sh) pentane.pdb 20 5 | By changing the arguments to the command, we can change the script’s behavior |

However, will the next person using the script know what it does? Let’s add some comments at the top\!

| $ nano middle.sh |  |
| :---- | :---- |
| \# select lines from the middle of a file \# usage: bash [middle.sh](http://middle.sh) filename  \# end\_line num\_lines head \-n “$2” “$1” | tail \-n “$3” | A comment starts with a \# and runs to the end of the line.  Save & Close |

Okay, what if we want to process many files in a single pipeline? 

| code | output | comments |
| :---- | :---- | :---- |
| $ wc \-l \*.pdb | sort \-n |  | wc \-l (lists the number of lines in the files) sort \-n (sorts numerically)  However, it only returns a list of files in the current directory What if we wanted ALL of the files? |

We make a script to automate it\!

| $ nano sorted.sh |  |
| :---- | :---- |
| \# sort files by their length \# usage: bash [sorted.sh](http://sorted.sh) one\_or\_more\_filenames wc \-l “$@” | sort \-n Ctrl-O Ctrl-X |  Now we are going to use a special variable “$@” which means “All of the command line arguments to the shell script” |
| $ bash [sorted.sh](http://sorted.sh) \*.pdb ../creatures/\*.dat |  |

Challenge \- List Unique Species  
Navigate to /animal-counts

| code | output | comments |
| :---- | :---- | :---- |
| $ head \-n 20 animals.csv | 2012-11-05,deer,5 2012-11-05,rabbit,22 2012-11-05,raccoon,7 2012-11-06,rabbit,19 2012-11-06,deer,2 2012-11-06,fox,4 2012-11-07,rabbit,16 2012-11-07,bear,1 |  Let’s say you want to know how many unique species are in animals.csv  |
| $ cut \-d , \-f 2 animals.csv | sort | uniq | bear deer fox rabbit raccoon | Remembering that is a PITA… make a script\! |
| $ nano species.sh |  |  |
| \# script to find unique species in csv files where species is the second data field \# this script accepts any number of file names as command line arguments \# loop over files for file in $@ \> do \> echo "Unique species in $file:" \> \# extract species names \> cut \-d , \-f 2 $file | sort | uniq \> done Ctrl-O Ctrl-X |  |  |

**Let’s bring it all together**  
Scenario \- You’re organizing data from multiple experiments. Each experiment tests different species at different temperatures. Create a script that builds the directory structure AND logs what it created

Navigate to /alkanes

| $ nano experiment\_setup.sh |  |
| :---- | :---- |
| \#\!/bin/bash \# script to set up experimental directory structure log\_file="setup\_log.txt" echo "Experiment setup started: $(date)" \> $log\_file for species in cubane ethane methane do     mkdir $species     echo "Created $species directory" \>\> $log\_file     for temperature in 25 30 37 40     do         mkdir $species/$temperature         touch $species/$temperature/experiment.sh         echo "  \- Created $species/$temperature/" \>\> $log\_file     done done echo "Setup completed: $(date)" \>\> $log\_file echo "Setup complete\! Check $log\_file for details."  | Shebang \# notes about your script (reproducibility) Make a log\_file to record everything you did Echo statement of set up started and send to log\_file Nested loop that we did before with species, temperature, and [experiment.sh](http://experiment.sh)  Echo statement completed to log\_file Echo statement that the whole thing is complete and to check the log\_file  |

---

### **Day 4 \- Git**

**Resources:**

* [**https://evanwill.github.io/get-git-b/**](https://evanwill.github.io/get-git-b/)  
* [**https://swcarpentry.github.io/git-novice/instructor/01-basics.html**](https://swcarpentry.github.io/git-novice/instructor/01-basics.html)

Go to github and set up an account. Typically, you’ll want to start a project on Github and then clone it. 

Git install latest version: [https://git-scm.com/install/windows](https://git-scm.com/install/windows)   
	Select your system & run through installation process

Configure and set up your git  
$ git \--version  
$ git config \--global user.name "example name"  
$ git config \--global user.email "myemail@gmail.com"  
$ git config \--list     \#\#returns “global” user information. You can set up different user for a repo  
$ git config \--global \--edit  
$ git config \--global core.editor "nano \-w"  
$ git config \--global \--edit  
   
Make a repo  
$ cd \~/Desktop  
$ mkdir example-repo  
$ cd example-repo  
$ git init  
$ ls  
$ ls \-la  
$ cd .git  
$ ls \-la  
$ cd ..  
$ git status  
\#\#don’t make nested repos. 

General workflow: [https://evanwill.github.io/get-git-b/content/3-workflow.html](https://evanwill.github.io/get-git-b/content/3-workflow.html)

When starting out, follow this order:  
git status  
git pull	  
git add file.txt  
git commit \-m "message"  
git push

$ git status  
$ cp \~/Desktop/carpentries/shell-lesson-data/exercise-data/alkanes/middle.sh .  
$ ls  
$ pwd  
$ cp ../shell-lesson-data/exercise-data/alkanes/\*.pdb .  
$ cp ../shell-lesson-data/exercise-data/alkanes/sorted.sh .

| $ nano sorted.sh |  |
| :---- | :---- |
| \# sort files by their length \# usage: bash [sorted.sh](http://sorted.sh) one\_or\_more\_filenames \# hidden ninja wc \-l “$@” | sort \-n Ctrl-O Ctrl-X |  Now we are going to use a special variable “$@” which means “All of the command line arguments to the shell script” |
| $ bash [sorted.sh](http://sorted.sh) \*.pdb ../creatures/\*.dat |  |

$ git config \--global core.autocrlf true (skip if you don’t need it)  
git update-index \--chmod=+x [setupscript.sh](http://setupscript.sh) problems with execution??

$ git status

\#\# Three stages of git   
\#\# Working directory \-\> Staging Area \-\> Repository

$ git add \-A    \#\#could add only one file if you want  
$ git status  
$ git commit \-m "added first scripts and data files"  
$ touch another\_file.txt  
$ git status  
**\#\#Exercise 1: practice making a file using any method you want. Update the git repo.**

Let’s look at how you view and access history  
$ nano sorted.sh  \#mess up this script  
$ git add \-A  
$ git commit \-m “added function to sorted.sh”

\#oh no. now we discover that the script is busted.  
$ git checkout HEAD\~1 sorted.sh  
$ less sorted.sh  
$ git status           \#\#git reverted the file back by one  
$ git add \-A   
$ git commit \-m “revert to old sorted.sh script”  
$ git status  
$ git log \--oneline

**Talk about .gitignore \- Do we REALLY need EVERYTHING to be tracked??**  
$ pwd  
$ ls  
$ nano .gitignore  
\*.pdb  
$ git status  
$ git add \-A  
$ git commit \-m “made and added \*.pdb to .gitignore”  
$ git rm \--cached \*.pdb  
$ git status  
$ git commit \-m “remove \*.pdb files from tracking”  
$ git status  
$ ls  
$ nano cubane.pdb (more pirates, ahhh\!)  
$ git status  
$ git add cubane.pdb  
$ git check-ignore \-v \*.pdb

A good rule is to create your .gitignore file before you start git adding things otherwise you’ll need to untrack them with git rm \--cached 

**Talk about git diff \- But like, WHAT changes did I ACTUALLY make??**  
$ nano [sorted.sh](http://sorted.sh)  
\# added echo “$@” to script so it will print out all the arguments passed to the script (so you can see what is processing)  
\# (delete) hidden ninja  
echo “$@”   
$ bash sorted.sh \*.pdb  
$ git diff  
$ git status  
$ git add sorted.sh  
$ git commit \-m "added print out function to sorted.sh"  
$ git log \--oneline

**Lets move on from basic git repo step to create a remote repo on Github**

* Go to github  
* Create new repository names “creatures\_github”  
* Edit the readme.md file in the browser and commit changes  
* Just did several steps;  
  * mkdir creatures\_github  
  * cd creatures\_github  
  * git init  
  * nano README.md  
  * git add \-A  
  * git commit

Now lets clone this repo and start working with it

$ cd \~/Desktop  
$ git clone \[repo ssh link\]  
$ cd creatures\_github  
$ cp ../example\_repo/\*.sh .  
$ git status

Before you push anything, always pull to make sure nobody has made changes  
$ git pull  
$ git add \-A  
$ git commit \-m “added [middle.sh](http://middle.sh) & sorted.sh scripts to repo”  
$ git status  
$ git push

I didn’t run into any issues with the test run   
May need to deal with authentication: [https://evanwill.github.io/get-git-b/content/2-install.html\#authentication](https://evanwill.github.io/get-git-b/content/2-install.html#authentication)  
Or maybe here: [https://swcarpentry.github.io/git-novice/instructor/07-github.html](https://swcarpentry.github.io/git-novice/instructor/07-github.html)  
Recommend installing gui for git

Token (not ideal \- temporary)  
GitHub \-\> Settings \-\> Developer settings \-\> Personal Access Tokens 

Ssh:  
[https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) 

$ git pull  
$ cp \~/Desktop/example-repo/another\_file.txt .  
$ cp \~/Desktop/example-repo/.gitignore .  
$ git status  
$ git add \-A  
$ git commit \-m "add data files and text file to repo"  
$ git status  
$ git push

Now go check on Github to see if the repo was updated.   
Good Job\!  
   
Okay, test run worked for me with just cloning the https

Be sure to use the ssh GitHub link

Test out collaborating: [https://swcarpentry.github.io/git-novice/instructor/08-collab.html](https://swcarpentry.github.io/git-novice/instructor/08-collab.html)

**Intro to R**  
[Download and install RStudio here](https://posit.co/download/rstudio-desktop/)

Lessons:

* [01 Introduction to R and RStudio](https://swcarpentry.github.io/r-novice-gapminder/01-rstudio-intro.html)  
* [04 Data Structures](https://swcarpentry.github.io/r-novice-gapminder/04-data-structures-part1.html)

[Other useful R resources](https://swcarpentry.github.io/r-novice-gapminder/instructor-notes.html)

Open RStudio IDE  
Orient yourself to the panels  
Test out prompt \- use tab and up arrows  
	\> getwd()  
	\> list.files()

Make an R script  
Save R script  
Add stuff to it and save it again

Unlike shell, R is handy for basic arithmetic  
To practice, add, subtract, divide, multiply some numbers in your new script.   
Save it

Practice cancelling commands (exit)  
Practice order of operations  
Combine functions and arithmetic   
\>sin(1) \+ 1 \* 5

Explore inputs using log() function

\> log(5, 10\)   \#versus  
\> log(5)   \#versus  
\> log(5, 2.71828)

R can be used to evaluate statements

\> 1==1   \#double equals important  
\> 1\!=2    \#the \! switches T to F and vise versa  
\> 1 \< 2  
\> 1 \<= 2

Just like in bash, we can make variables  
\> x \<- 1/40     \#\#\#note the assignment character is different than in bash  
\> x \= 1/40      \#you may do this, but is it not conventional R format. The “=” is typically used for named parameters in an argument  
\> x

Rstudio makes it handy to see variables in the “Environment” panel

Variables can be any name….but use good conventions  
\> pirate \<- 5  
\> PirateHat \<- 1  
\> 1pirate \<- 5

Variable may be modified  
\> pirate \<- pirate \+ 1

\> rm(pirate, PirateHat)

In general, having a bunch of R scripts in some random folder is not the best way to organize projects. R provides a convenient way to organize project. They are called “R projects”. 

To do this, go File \> New Project \> New Directory  
Lets make a new R script called “IntroDay.R” and paste in all the commands from before.

One other way to create a version control Rproject is to clone from github. You must have git installed into RStudio to do this. [https://jennybc.github.io/2014-05-12-ubc/ubc-r/session03\_git.html](https://jennybc.github.io/2014-05-12-ubc/ubc-r/session03_git.html)

When it works, it is very convenient. We are going to use a normal RProject.

Close out of R. Open the “Repro\_workshop.Rproj” file.  
We are going to do some organizing. Make there folders:  
	\-”plots”  
	\-”rawdata”  
	\-”results”  
There are three ways to do so. Feel free to use any of them.  
\>dir.create(“plots”)  
\>dir.create(“rawdata”)  
\>dir.create(“results”)

Copy this data into the “rawdata” folder  
[this link to a csv file](https://swcarpentry.github.io/r-novice-gapminder/data/gapminder_data.csv)

\>download.file("https://swcarpentry.github.io/r-novice-gapminder/data/gapminder\_data.csv", "rawdata/gapminder.csv")

\#stop and talk about other ways. Also talk about specifying named parameters vs. leaving these off.

---

**Day 5 \- R**  
[**https://swcarpentry.github.io/r-novice-gapminder/05-data-structures-part2.html**](https://swcarpentry.github.io/r-novice-gapminder/05-data-structures-part2.html)  
[**https://swcarpentry.github.io/r-novice-gapminder/13-dplyr.html**](https://swcarpentry.github.io/r-novice-gapminder/13-dplyr.html)

Goals \- 

1. Open and save data  
2. Learn about object types (e.g., numbers, characters, logical)  
3. Learn about data structures (e.g., vectors, lists, data frames)  
4. Install packages  
5. Access and manipulate data  
6. Tidyverse

Setup: download “gapminder.csv” dataset to your project directory: [https://docs.google.com/spreadsheets/d/1HeGGHKaH5PEvVcvuUP41FV-zSlne16VW/edit?usp=sharing\&ouid=105091230147888538435\&rtpof=true\&sd=true](https://docs.google.com/spreadsheets/d/1HeGGHKaH5PEvVcvuUP41FV-zSlne16VW/edit?usp=sharing&ouid=105091230147888538435&rtpof=true&sd=true)

Or the \*.csv file if you prefer:  
 [this link to a csv file](https://swcarpentry.github.io/r-novice-gapminder/data/gapminder_data.csv)

Open our PirateNinjas R project by double clicking on the PirateNinjas.Rproj file.

Verify that you have the “gapminder.csv” file in “rawdata” directory

Create a new R script called “day2.R”

\> gap \<- read.csv("rawdata/gapminder.csv")  
\> dim(gap)  
\> nrow(gap)

\#note about dataframe sizes in R. All stored in ram  
\#look at object types in this data frame:  
	“Int” \- integer  
	“Num” \- number (floating point)  
	“Chr” \- character  
	“Logi” \- logical 

\#make a column with logical type objects  
\> gap$big\_countries \<- gap$pop \>= 100000000

\#data structure types:  
	“Data.frame” \- objects must be the same length  
	“Vector” \- most basic data structure type. One-dimensional. All data the same type  
	“List” \- sort of like data frames, but vectors do not have to be the same length  
	“Factor” \- categorical data

Vectors make operations much faster than loops. Each of the variables in our data.frame is a vector that we can do stuff to.  
\> gap$pop \- 1000  
You don’t have to believe me. Try timing using vectorization vs. loops

\> system.time(gap$pop \- 1000\)  
\> system.time(  
  	for(i in 1:nrow(gap)) {  
    		print(gap\[i,\]$pop \- 1000\)  
  	}  
)

\#lets practice a little bit with data structures and data types  
We are going to use the “c” or combine function to make vectors.   
Practice;  
\> c(“calico”, “black”, “tabby”)  
\> str(c(“calico”, “black”, “tabby”))  
\> cats \<- data.frame(coat \= c("calico", "black", "tabby"),  
                    weight \= c(2.1, 5.0, 3.2),  
                    likes\_catnip \= c(1, 0, 1))

\> write.csv(x \= cats, file \= "rawdata/feline-data.csv", row.names \= FALSE)

Practice: What object types are used in the “cats” dataframe?

Vectorization applies to character vectors as well:  
\> paste("My cat is", cats$coat)

Try doing operations on different object types  
cats$weight \+ cats$coat

Be very careful when editing dataframe that the data is of the same type.  
Here is an example:  
\> add\_cat \<- data.frame(coat \= "tabby", weight \= "2.3 or 2.4", likes\_catnip \= 1)  
\> str(add\_cat)  
\> cats2 \<- rbind(cats, add\_cat)  
\> str(cats)  
\> str(cats2)

This is called type coercion and it is something to watch out for because it can change how your data looks. See example below.  
There is an order of operations for object types. R will always try to make a logical over an integer.   
logical \-\> integer \-\> double (“numeric”) \-\> complex \-\> character

\> coercion\_vector \<- c(0, T)     
What do you predict?  
\> coercion\_vector

It can be very handy to use coercion to change variable types.  
\> coercion\_vector \<- c(‘0’, ‘2’, ‘4’)  
\> str(coercion\_vector)  
\> coercion\_vector \<- as.numeric(coercion\_vector)  
\> str(coercion\_vector)  
\> as.logical(coercion\_vector)  
\> rm(coercion\_vector)

Lists are weird. Their main advantage is that they are unstructured. Don’t have to have same type of data, or length of objects in list.  
\> list\_example \<- list(c(1,2,3,4,5), “a”, c(T,T,T,F))  
\> list\_example  
Access elements in lists with double \[\[\]\]  
\> list\_example\[\[1\]\]  
\> list\_example\[\[1\]\]\[1\]  
Can also name elements in list:  
\>list\_example \<- list(nums=c(1,2,3,4,5), chars="a", logis=c(T,T,T,F))  
\> list\_example$nums\[1\]

**Accessing and modifying data**  
\> mySeries \<- 1:10     \#create a vector  
\> letters  
\> myLabels \<- letters\[1:10\]  
\> myData \<- data.frame(labs=myLabels, dat=mySeries)

\> head(myData)  
\> tail(myData)  
\> myData\[1,1\]  
\> myData\[2,2\]  
\> myData\[1:5,1:2\]  
\> myData\[1:5, \]  
\> myData$labs  
\> myData$labs\[1:5\]

Practice problem: From the gapminder dataset, select the first 5 countries and years in the dataset. Challenge: select non-ajoining columns like country and continent.  
\> gap\[1:5, 1:2\]  
\> gap\[1:5, c(1,4)\]  
\> gap\[1:5, c("country", "continent")\]

Can use logical operators to select from data.

\> gap$year \== 1957  
\> table(gap$year \== 1957\)  
\> gap\[gap$year \== 1957, \]  
\>  gap1957 \<- gap\[gap$year \== 1957, \]  
\>  gap\[gap$year \== 1957, \]  \-\> gap1957    \#\#\#\#this also works, but is very unconventional

What about more than one year?  
\> gap\[gap$year \== 1957 | gap$year \== 1958, \]  
\> gap\[gap$year %in% c(1957, 1958, 1959), \]

Select certain rows and certain columns  
\> gap\[gap$year \== 1957, c("country", "continent", "pop")\] 

Practice problem: Make a new data frame containing the lifeExpectancies for every country, but only for “big” countries from 1970-1990. Hint: use & instead of | .

LifeExpBigs \<- gap\[gap$year \>= 1970 & gap$year \<= 1990 & gap$big\_countries \== TRUE, c("country", "lifeExp")\]

This is why we are going to learn dplyr  
install.packages(“tidyverse”)  \#this you only run once  
library(tidyverse)        \#this usually goes at the top of your scripts

[https://swcarpentry.github.io/r-novice-gapminder/13-dplyr.html](https://swcarpentry.github.io/r-novice-gapminder/13-dplyr.html)  
Some redundancy from what we learned above.  
\> select()         \- chooses columns  
\> filter()            \- choose rows  
\> group\_by()    \- make groups of data  
\> summarize()    \- calculate stuff (like means) and make new dataframe  
\> mutate()           \- add new columns or edit columns

There is a nice picture in the Carpentries materials

gap\_smaller \<- gap %\>%  
	select(country, continent, pop)

gap\_original \<- gap %\>%  
	select(-big\_countries)

tidyGap \<- gap %\>%  
	select(year, country, gdpPercap) %\>%  
	filter(year \>= 1970 & year \<= 1990\)

tidyGap \<- gap %\>%  
	select(year, country, pop, gdpPercap) %\>%  
	filter(between(year, 1970, 1990\) %\>%  
	rename(population \= pop)

GroupBy is very useful for statistics or summarizing data.  
Useful graphic in Carpentries material.

gdp\_bycontinents \<- gap %\>%  
    group\_by(continent) %\>%  
    summarize(mean\_gdpPercap \= mean(gdpPercap))

Problem: Calculate the mean life expectancy per country. Which country has the longest? The shortest?

gdp\_bycontinents\_byyear \<- gap %\>%  
    group\_by(continent, year) %\>%  
    summarize(mean\_gdpPercap \= mean(gdpPercap))

gdp\_pop\_bycontinents\_byyear \<- gap %\>%  
    group\_by(continent, year) %\>%  
    summarize(mean\_gdpPercap \= mean(gdpPercap),  
              sd\_gdpPercap \= sd(gdpPercap),  
              mean\_pop \= mean(pop),  
              sd\_pop \= sd(pop),  
countriesInContinent \= n())

Mutate \-   
gap %\>%  
  mutate(gdp\_billion \= pop \* gdpPercap / 10^9)

---

**Day 6 \- R**

Goals \-

1. Practice data wrangling  
2. Plotting data

[https://swcarpentry.github.io/r-novice-gapminder/08-plot-ggplot2.html](https://swcarpentry.github.io/r-novice-gapminder/08-plot-ggplot2.html)  
[https://r-graph-gallery.com/best-dataviz-packages.html](https://r-graph-gallery.com/best-dataviz-packages.html)

library(ggplot2)  
gap \<- read.csv(‘rawdata/gapminder.csv')

There are default plots in R: (‘plot’). They are a little limited in their basic form, but can be quite powerful if you become good at it.  
plot(x=gap$year, gap$lifeExp)  
plot(x=gap$year, gap$lifeExp, xlab="Year", ylab="Life Expectancy (yrs)")  
hist(gap$lifeExp)

\#saving is annoying in base  
jpeg("plots/lifeExp\_histogram.jpg")  
hist(gap$lifeExp, breaks=30)  
dev.off()

**Move on to ggplot**

ggplot(gap)  \#what do you see?

ggplot uses ‘aesthetics’ to define what to plot. This includes x/y variables, colors, groups, etc.

ggplot(gap, aes(x \= gdpPercap, y \= lifeExp))  
This is the correct notation: ggplot(data \= gap, mapping \= aes(x \= gdpPercap, y \= lifeExp))

Now what are we missing? Data points. Ggplot uses the term ‘geoms’

ggplot(gap, aes(x \= gdpPercap, y \= lifeExp)) \+  
	geom\_point()

ggplot(gap, aes(x \= lifeExp, y \= continent)) \+  
  geom\_boxplot()

**Challenge 1: Use your R knowledge to look at the structure of the data. Find another variable to plot.**

Possible plots

ggplot(gap, aes(x \= year, y \= lifeExp)) \+  
  geom\_point()

ggplot(gap, aes(x \= year, y \= lifeExp)) \+  
  geom\_boxplot()  
\#\#this is a problem that you are likely to run into. There are a couple of ways to fix it.

ggplot(gap, aes(x \= year, y \= lifeExp, group=year)) \+  
  geom\_boxplot()  
\#tell ggplot that it needs to group all the data by year (so that year is not a continuous data type.  
\#another is coerce into “factors”  
gap %\>%  
  mutate(year=as.factor(year)) %\>%  
  ggplot(aes(x \= year, y \= lifeExp)) \+  
    geom\_boxplot()

ggplot(gap, aes(x \= year, y \= lifeExp, group=country)) \+  
  geom\_line()

**Learn how to color our plots**  
ggplot(gap, aes(x \= gdpPercap, y \= lifeExp)) \+  
  geom\_point(color=”blue”)

ggplot(gap, aes(x \= gdpPercap, y \= lifeExp)) \+  
  geom\_point(color="blue", alpha \= 0.5)

\#\#automatically assign colors to groups  
ggplot(gap, aes(x \= gdpPercap, y \= lifeExp, color=continent)) \+  
  geom\_point(alpha \= 0.5)

Try a different plot:   
ggplot(gap, aes(x \= year, y \= lifeExp, group=country, color=continent)) \+  
  geom\_line()

\#in this example, the color aesthetic is inside the aes() parenthesiss. This means that color will depend on a variable. We do not need to do this. We can set the color.

We are not stuck with default ggplot colors. We will look at two ways to pick colors.  
I find this package handy: ggsci  
[https://nanx.me/ggsci/articles/ggsci.html](https://nanx.me/ggsci/articles/ggsci.html)

ggplot(gap, aes(x \= year, y \= lifeExp, group=country, color=continent)) \+  
  geom\_line() \+  
  scale\_color\_aaas()

Another way is to manually define the colors. Must supply a vector of colors that is equal to the number of factors (or groups in the variable sent to “color”).  
table(gap$continent)  
length(unique(gap$continent))

I often pick colors here: [https://colorbrewer2.org/\#type=sequential\&scheme=BuGn\&n=3](https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3)

ggplot(gap, aes(x \= year, y \= lifeExp, group=country, color=continent)) \+  
  geom\_line() \+  
  scale\_color\_manual(values=c("\#4a1486", "\#6a51a3", "\#807dba", "\#9e9ac8", "\#bcbddc"))

Size and shape adjustments are easy  
ggplot(gap, aes(x \= gdpPercap, y \= lifeExp, color=continent)) \+  
  geom\_point(alpha \= 0.5, size=3, shape=18) \+  
  scale\_color\_nejm()  
[https://www.sthda.com/english/wiki/ggplot2-point-shapes](https://www.sthda.com/english/wiki/ggplot2-point-shapes)

s  
ggplot(gap, aes(x \= gdpPercap, y \= lifeExp, color=continent, shape=continent)) \+  
  geom\_point(alpha \= 0.5, size=2) \+  
  scale\_color\_nejm()

What if you don’t like the shapes that R picked for you?  
Practice problem 2: You specify the shapes. While you’re at it, make Oceania points twice as big as the others. 

ggplot(gap, aes(x \= gdpPercap, y \= lifeExp, color=continent, shape=continent, size=continent))+  
  geom\_point(alpha \= 0.5) \+  
  scale\_color\_nejm() \+  
  scale\_shape\_manual(values=c(15, 16, 17, 18, 8)) \+  
  scale\_size\_manual(values=c(2,2,2,2,5))

**So far, we have added only one geom layer. Lets try more.**  
\#\#geoms are added as layers  
ggplot(gap, aes(x \= lifeExp, y \= continent)) \+  
  geom\_boxplot(outlier.alpha \= 0\)

ggplot(gap, aes(x \= lifeExp, y \= continent)) \+  
  geom\_boxplot(outlier.alpha \= 0\) \+  
  geom\_jitter(alpha=0.5, height \= 0.3)

ggplot(gap, aes(x \= lifeExp, y \= continent)) \+  
  geom\_boxplot(outlier.alpha \= 0\) \+  
  geom\_jitter(alpha=0.5, height \= 0.3, aes(color=year))

Alternating the order:  
ggplot(gap, aes(x \= lifeExp, y \= continent)) \+  
  geom\_jitter(alpha=0.5, height \= 0.3, aes(color=year)) \+  
  geom\_boxplot(outlier.alpha \= 0\)

\#can modify so many parts of these plots. We will explore just a couple  
\#you can ask google or chatgtp to help you get what you want.

ggplot(gap, aes(x \= lifeExp, y \= continent)) \+  
  geom\_boxplot(outlier.alpha \= 0\) \+  
  geom\_jitter(alpha=0.5, height \= 0.3, aes(color=year)) \+  
  theme(axis.title.y \= element\_text(angle=0, vjust=0.5))

ggplot(gap, aes(x \= lifeExp, y \= continent)) \+  
  geom\_boxplot(outlier.alpha \= 0\) \+  
  geom\_jitter(alpha=0.5, height \= 0.3, aes(color=year)) \+  
  theme(axis.title.y \= element\_text(angle=0, vjust=0.5)) \+  
  labs(x="Life Expectancy (yrs)", y= "Continent", title="LifeExp by Continent")

I think that it is faster to ask AI to change stuff for you now (rather than google and read) amen  
ggplot(gap, aes(x \= lifeExp, y \= continent)) \+  
  geom\_boxplot(outlier.alpha \= 0\) \+  
  geom\_jitter(alpha \= 0.5, height \= 0.3, aes(color \= year)) \+  
  scale\_x\_continuous(  
    breaks \= seq(30, 90, by \= 10),  \# Sets breaks at 30, 40, 50, ..., 90  
    limits \= c(30, 90\)              \# Ensures the axis ranges from 30 to 90  
  ) \+  
  theme(axis.title.y \= element\_text(angle \= 0, vjust \= 0.5)) \+  
  labs(x \= "Life Expectancy (yrs)", y \= "Continent", title \= "LifeExp by Continent")

Ggplot2 has some built in pre-defined “themes” that are better than the default theme. Use them.  
ggplot(gap, aes(x \= lifeExp, y \= continent)) \+  
  geom\_boxplot(outlier.alpha \= 0\) \+  
  geom\_jitter(alpha \= 0.5, height \= 0.3, aes(color \= year)) \+  
  scale\_x\_continuous(  
    breaks \= seq(30, 90, by \= 10),  \# Sets breaks at 30, 40, 50, ..., 90  
    limits \= c(30, 90\)              \# Ensures the axis ranges from 30 to 90  
  ) \+  
  theme(axis.title.y \= element\_text(angle \= 0, vjust \= 0.5)) \+  
  labs(x \= "Life Expectancy (yrs)", y \= "Continent", title \= "LifeExp by Continent") \+  
  theme\_classic()

**Practice: pick any plot and test out a few different themes.**

I’m pretty happy with the plot above, so lets save it.

Plot1 \<- ggplot(gap, aes(x \= lifeExp, y \= continent)) \+  
  geom\_boxplot(outlier.alpha \= 0\) \+  
  geom\_jitter(alpha \= 0.5, height \= 0.3, aes(color \= year)) \+  
  scale\_x\_continuous(  
    breaks \= seq(30, 90, by \= 10),  \# Sets breaks at 30, 40, 50, ..., 90  
    limits \= c(30, 90\)              \# Ensures the axis ranges from 30 to 90  
  ) \+  
  theme(axis.title.y \= element\_text(angle \= 0, vjust \= 0.5)) \+  
  labs(x \= "Life Expectancy (yrs)", y \= "Continent", title \= "LifeExp by Continent") \+  
  theme\_classic()  
Plot1   
ggsave(plot1,   
       file="plots/lifeByContinent.png",   
       width \= 5, height=5, units="in")  
ggsave(plot1,   
       file="plots/lifeByContinent.pdf",   
       width \= 5, height=5, units="in")

\#there are several good tools for making multipanel figures.   
\#we will explore the ggplot2 methods.  
\#this is called faceting

Other packages:   
cowplot()  
grid()

\#start again with this plot  
ggplot(gap, aes(x \= gdpPercap, y \= lifeExp)) \+  
  geom\_point() \+  
  scale\_x\_log10()

ggplot(gap, aes(x \= gdpPercap, y \= lifeExp, color=continent)) \+  
  geom\_point() \+  
  scale\_x\_log10() \+  
  scale\_color\_nejm() \+  
  theme\_bw()

**\#now for faceting**  
ggplot(gap, aes(x \= gdpPercap, y \= lifeExp, color=continent)) \+  
  geom\_point() \+  
  scale\_x\_log10() \+  
  scale\_color\_nejm() \+  
  theme\_bw() \+  
  facet\_wrap( \~ continent)

\#use AI to fix key  
ggplot(gap, aes(x \= gdpPercap, y \= lifeExp, color=continent)) \+  
  geom\_point() \+  
  scale\_x\_log10() \+  
  scale\_color\_nejm() \+  
  theme\_bw() \+  
  facet\_wrap( \~ continent) \+  
  theme(  
    legend.position \= c(1, 0),  
    legend.justification \= c("right", "bottom"),  
    plot.margin \= unit(c(5.5, 5.5, 5.5, 5.5), "mm")  
  )  
Let’s say we want to highlight the US. We could accomplish this task by editing the colors of each continent. Or, we can create a subset of the data and just plot another geom\_layer on top.

\#adding geom layers and subsetting data  
dataUS \<- gap %\>%  
filter(country \== “United States”)  
ggplot(gap, aes(x \= gdpPercap, y \= lifeExp, color=continent)) \+  
  geom\_point() \+  
  scale\_x\_log10() \+  
  facet\_wrap( \~ continent) \+  
  geom\_point(data \= dataUS, aes(x=gdpPercap, y=lifeExp), color="black")

plot2 \<- ggplot(gap, aes(x \= gdpPercap, y \= lifeExp, color=continent)) \+  
  geom\_point() \+  
  scale\_x\_log10() \+  
  facet\_wrap( \~ continent) \+  
  geom\_point(data \= dataUS, aes(x=gdpPercap, y=lifeExp), color="black")  
plot2  
ggsave(plot2,   
       file="plots/LifeGdpFacet.png",   
       width \= 5, height=5, units="in")  
ggsave(plot2,   
       file="plots/LifeGdpFacet.pdf",   
       width \= 5, height=5, units="in")

Now we want to put together our two plots. Use cowplot or patchwork.  
plot1 \+ plot2

multipanel \<- plot1 \+ plot2

ggsave(multipanel,   
       file="plots/combo.png",   
       width \= 8, height=5, units="in")  
ggsave(multipanel,   
       file="plots/combo.pdf",   
       width \= 8, height=5, units="in")

