# OpenDSA (Development Channel)

This is the development repository for the OpenDSA project. Note that the stable
release version is maintained at:
https://github.com/cashaffer/OpenDSA-stable.

The goal of the OpenDSA project is to create open-source courseware for use in
Data Structures and Algorithms courses, that deeply integrates textbook-quality
content with algorithm visualizations and interactive, automatically assessed
exercises.

## Setup

To check out a read-only copy of this repository:

    git clone git://github.com/OpenDSA/OpenDSA.git OpenDSA

To check out a read-write copy of this repository (requires permission to commit
to the repo):

    git clone https://YOURGITHUBID@github.com/OpenDSA/OpenDSA.git OpenDSA

Once you have cloned this repository, you will need to initialize and update the
submodules and compile some of the libraries. Do the following:

    git submodule init
    make pull

In order to pull a more recent copy of JSAV than what is in the submodule:

    cd JSAV
    git pull https://github.com/vkaravir/JSAV

A similar command will let you pull the up-to-date version of QBank.

The OpenDSA Wiki has a "Getting Started" page
(http://algoviz.org/algoviz-wiki/index.php/The_OpenDSA_Developer%27s_Getting_Started_Guide)
that contains useful information for new developers, including what tools are
necessary and how to install them.

System documentation is found in the "Doc" directory. One consequence of running
"make pull" is to compile this documentation. You can also view it at our mirror
site: http://algoviz.org/OpenDSA/Doc/manual/


## Directory Structure

The major components in the directory structure are as follows:

AV: Source code for various algorithm visualizations and associated exercises.
Subdirectories divide the content by topical areas.

Books: Created by the build process, this contains compiled versions of
"textbooks".

config: This holds configuration files for specific books (whose output will go
to the "Books" directory).

Doc: Documentation. Currently includes a template for Khan Academy multiple
choice questions, and documentation for using the various Sphinx directives that
we have created.

Exercises: Our Khan Academy Infrastructure-based exercises. Subdirectories
divide the content by topic.

**Frontend: Experimental interface for allowing instructor selection of modules.
Currently not in use, will be replaced at some point.

JSAV: The JavaScript Algorithm Visualization library (JSAV). This is a submodule
for the OpenDSA repository, linked to: https://github.com/vkaravir/JSAV. Thus,
when you check out OpenDSA, you must get the JSAV submodule by either running
the command "make pull" or by doing the following:
  git submodule init
  git submodule update
More information about JSAV can be found here:
http://jsav.io/

lib: System-wide library files

Makefile: Primarily for source file validation and to generate some of the
"textbooks" to the Books directory.

MIT-license.txt: The license file. OpenDSA is distributed under an MIT open
source license.

**Modules: Tutorial source from an obsolete system for generating content. Will
be removed.

ODSAkhan-exercises: Our somewhat modified version of the khan-exercises
distribution (the original is also available at GitHub). Note that you can view
and run the exercises with just this distribution, however, the files must be
hosted by a webserver. If you want to view them from your local machine, you
must run your own webserver, such as the "WebServer" Python script included in
this distribution. Simply run the script, then navigate to
http://127.0.0.1:8000/Exercises/ in your browser. If the pages are accessed
without the use of a webserver, they will either be a blank page or some
gibberish. Alternatively, you can see the exercises at our mirror site:
http://algoviz.org/OpenDSA/dev/OpenDSA/Exercises.

QBank: A question bank system under development. This is a submodule maintained
at: https://github.com/cashaffer/QBank.

README.md: This file

RST: Contains our custom Sphinx directives used during the build process and the
source for tutorial content written in reStructuredText (RST) format and divided
by language and sub-divided by topic area.

SourceCode: The sourcecode for code snippets contained in the tutorials.
Ultimately, we hope to support code snippets in Processing (a Java dialect),
Python, and JavaScript. In this way, instructors would be able to generate
versions of tutorials that support any or all of these three languages.

**Storyboard: Materials related to "storyboarding" designs for tutorials. This
concept never gained much traction, and this might be removed at some point.

WebServer: A command for invoking a simple python-based web server that will
enable you to run the Khan Academy exercises if your machine is not running a
true web server. You only need to have python installed for this to work.
