.. This file is part of the OpenDSA eTextbook project. See
.. http://algoviz.org/OpenDSA for more details.
.. Copyright (c) 2012-2013 by the OpenDSA Project Contributors, and
.. distributed under an MIT open source license.

.. avmetadata::
   :author: Cliff Shaffer
   :prerequisites:
   :topic: Graphs


.. odsalink:: AV/Graph/GraphDefCON.css
.. odsalink:: AV/Development/GIntroRepCON2_2.css
.. odsalink:: AV/Development/GIntroRepCON2_3.css

Graphs Chapter Introduction
===========================

Graphs provide the ultimate in data structure flexibility.
A graph consists of a set of nodes, and a set of edges where an
edge connects two nodes.
Trees and lists can be viewed as special cases of graphs.

Graphs are used to model both real-world systems and abstract
problems, and are the data structure of choice in many
applications.
Here is a small sampling of the types of problems that graphs are
routinely used for.

#. Modeling connectivity in computer and communications networks.

#. Representing an abstract map as a set of locations with distances
   between locations. This can used to compute shortest routes between
   locations such as in a GPS routefinder.

#. Modeling flow capacities in transportation networks to find which
   links create the bottlenecks.

#. Finding a path from a starting condition to a goal condition.
   This is a common way to model problems in artificial intelligence
   applications and computerized game players.

#. Modeling computer algorithms, to show transitions from one program
   state to another.

#. Finding an acceptable order for finishing subtasks in a complex
   activity, such as constructing large buildings.

#. Modeling relationships such as family trees, business or military
   organizations, and scientific taxonomies.

The rest of this module covers some basic graph terminology.
The following modules will describe fundamental representations for
graphs, provide a reference implementation, and cover
core graph algorithms including traversal, topological sort, shortest
paths algorithms, and algorithms to find the minimal-cost spanning tree.
Besides being useful and interesting in their own right, these
algorithms illustrate the use of many other data structures presented
throughout the course.


Terminology and Representations
-------------------------------

A :term:`graph` :math:`\mathbf{G} = (\mathbf{V}, \mathbf{E})` consists
of a set of :term:`vertices <vertex>` :math:`\mathbf{V}` and a set of
:term:`edges <edge>` :math:`\mathbf{E}`,
such that each edge in :math:`\mathbf{E}` is a connection between a
pair of vertices in :math:`\mathbf{V}`. [#]_
The number of vertices is written :math:`|\mathbf{V}|`, and the number
of edges is written :math:`|\mathbf{E}|`.
:math:`|\mathbf{E}|` can range from zero to a maximum of
:math:`|\mathbf{V}|^2 - |\mathbf{V}|`.

A graph whose edges are not directed is called an
:term:`undirected graph`, as shown in part (a) of the following
figure.
A graph with edges directed from one vertex to another
(as in (b)) is called a :term:`directed graph` or :term:`digraph`.
A graph with labels associated with its vertices
(as in (c)) is called a :term:`labeled graph`.
Associated with each edge may be a cost or :term:`weight`.
A graph whose edges have weights
(as in (c)) is said to be a :term:`weighted graph`.

.. _GraphTerms:

.. inlineav:: GdirundirCON dgm 
   :output: show


Two vertices are :term:`adjacent` if they are joined by an edge, such
as Vertices :math:`a` and :math:`b` in the part (a) of the following
figure.
An edge connecting Vertices :math:`a` and :math:`b` is written
:math:`(a, b)`.
Such an edge is said to be :term:`incident` on Vertices :math:`a`
and :math:`b`.

.. inlineav:: GneighborCON dgm
   :output: show

A sequence of vertices :math:`v_1, v_2, ..., v_n`
forms a :term:`path` of length :math:`n-1` if there exist edges from
:math:`v_i` to :math:`v_{i+1}` for :math:`1 \leq i < n`.
A path is a :term:`simple path` if all vertices on the path are
distinct.
The :term:`length` of a path is the number of edges it contains.
A :term:`cycle` is a path of length three or more that connects
some vertex :math:`v_1` to itself.
A cycle is a :term:`simple cycle` if the path is simple, except for
the first and last vertices being the same.

.. inlineav:: GpathDefCON dgm 
   :output: show 

An undirected graph is a :term:`connected graph` if there is at least
one path from any vertex to any other.
The maximally connected subgraphs of an undirected graph are called
:term:`connected components <connected component>`.
For example, this figure shows an undirected graph
with three connected components.

.. _ConCom:

.. inlineav:: GconcomCON dgm
   :output: show

A graph with relatively few edges is called a :term:`sparse graph`,
while a graph with many edges is called a :term:`dense graph`.
A graph containing all possible edges is said to be a
:term:`complete graph`.
A :term:`subgraph` :math:`\mathbf{S}` is formed from graph
:math:`\mathbf{G}` by selecting a subset :math:`\mathbf{V}_s` of
:math:`\mathbf{G}`'s vertices and a subset 
:math:`\mathbf{E}_s` of :math:`\mathbf{G}` 's edges such that for every
edge :math:`e  \in \mathbf{E}_s`,
both vertices of :math:`e` are in :math:`\mathbf{V}_s`.
Any subgraph of :math:`V` where all vertices in the graph connect to
all other vertices in the subgraph is called a :term:`clique`.

.. inlineav:: GsparseDefCON dgm
   :output: show

A graph without cycles is called an :term:`acyclic graph`.
Thus, a directed graph without cycles is called a
:term:`directed acyclic graph` or :term:`DAG`.

A :term:`free tree` is a connected, undirected graph with no simple
cycles.
An equivalent definition is that
a free tree is connected and has :math:`|\mathbf{V}| - 1` edges.

There are two commonly used methods for representing graphs.
The :term:`adjacency matrix`
is illustrated by Figure :num:`Figure #GraphRep` (b).
The adjacency matrix for a graph is a
:math:`|\mathbf{V}| \times |\mathbf{V}|` array.
Assume that :math:`|\mathbf{V}| = n` and that
the vertices are labeled from :math:`v_0` through
:math:`v_{n-1}`.
Row :math:`i` of the adjacency matrix contains entries for
Vertex :math:`v_i`.
Column :math:`j` in row :math:`i` is marked if there is an edge
from :math:`v_i` to :math:`v_j` and is not marked otherwise.
Thus, the adjacency matrix requires one bit at each position.
Alternatively, if we wish to associate a number with each edge,
such as the weight or distance between two vertices,
then each matrix position must store that number.
In either case, the space requirements for the adjacency matrix are
:math:`\Theta(|\mathbf{V}|^2)`.

The second common representation for graphs is the
:term:`adjacency list`,
illustrated by Figure :num:`Figure #GraphRep` (c).
The adjacency list is an array of linked lists.
The array is :math:`|\mathbf{V}|` items long, with position :math:`i`
storing a pointer to the linked list of edges for Vertex :math:`v_i`.
This linked list represents the edges by the vertices that are
adjacent to Vertex :math:`v_i`.

.. TODO::
   type: Figure

   Refactor these figures to be one for adjacency matrix and the other
   for adjacency list, rather than one for directed graph and the other
   for undirected graph.

In this figure, we see the representations for a directed graph.

.. inlineav:: GIntroRepCON2_2 dgm 
   :output: show

In this figure, we see the representations for an undirected graph.

.. _Undirected:

.. inlineav:: GIntroRepCON2_3 dgm 
   :output: show 

.. topic:: Example

   The entry for Vertex 0 in Figure :num:`Figure #GraphRep` (c)
   stores 1 and 4 because there are two edges in the
   graph leaving Vertex 0, with one going to Vertex 1 and one going to
   Vertex 4.
   The list for Vertex 2 stores an entry for Vertex 4 because there is
   an edge from Vertex 2 to Vertex 4, but no entry for Vertex 3
   because this edge comes into Vertex 2 rather than going out.

The storage requirements for the adjacency list depend on both the
number of edges and the number of vertices in the graph.
There must be an array entry for each vertex (even if the vertex is
not adjacent to any other vertex and thus has no elements on its
linked list), and each edge must appear on one of the lists.
Thus, the cost is :math:`\Theta(|\mathbf{V}| + |\mathbf{E}|)`.

Both the adjacency matrix and the adjacency list can be used to store
directed or undirected
graphs.
Each edge of an undirected graph connecting Vertices :math:`u`
and :math:`v` is represented by two directed edges: one from
:math:`u` to :math:`v` and one from :math:`v` to :math:`u`.
Figure :num:`Figure #Undirected` illustrates the use of the adjacency
matrix and the adjacency list for undirected graphs.

Which graph representation is more space efficient depends on the
number of edges in the graph.
The adjacency list stores information only for those edges that
actually appear in the graph, while the adjacency matrix requires
space for each potential edge, whether it exists or not.
However, the adjacency matrix requires no overhead for pointers,
which can be a substantial cost, especially if the only information
stored for an edge is one bit to indicate its existence.
As the graph becomes denser, the adjacency matrix becomes
relatively more space efficient.
Sparse graphs are likely to have their adjacency list representation
be more space efficient.:

.. topic:: Example

   Assume that a vertex index requires two bytes, a pointer requires
   four bytes, and an edge weight requires two bytes.
   Then the adjacency matrix for the graph of
   Figure :num:`Figure #GraphRep` 
   requires :math:`2 |\mathbf{V}^2| = 50` bytes while the adjacency list
   requires :math:`4 |\mathbf{V}| + 6 |\mathbf{E}| = 56` bytes.
   For the graph of Figure :num:`Figure #Undirected`, the adjacency
   matrix requires the same space as before, while the adjacency list
   requires :math:`4 |\mathbf{V}| + 6 |\mathbf{E}| = 92` bytes
   (because there are now 12 edges instead of 6).

.. avembed:: Exercises/Development/GraphSpaceReqSum.html ka 

The adjacency matrix often requires a higher asymptotic cost for an
algorithm than would result if the adjacency list were used.
The reason is that it is common for a graph algorithm
to visit each neighbor of each vertex.
Using the adjacency list, only the actual edges connecting a vertex to
its neighbors are examined.
However, the adjacency matrix must look at each of its
:math:`|\mathbf{V}|`
potential edges, yielding a total cost of
:math:`\Theta(|\mathbf{V}^2|)`
time when the algorithm might otherwise require only
:math:`\Theta(|\mathbf{V}| + |\mathbf{E}|)` time.
This is a considerable disadvantage when the graph is sparse,
but not when the graph is closer to full.

.. avembed:: Exercises/Development/GraphIntroSumm.html ka 

Notes
-----

.. [#] Some graph applications require that a given pair of vertices
       can have multiple or parallel edges connecting them, or that a
       vertex can have an edge to itself.
       However, the applications discussed here do not require
       either of these special cases.
       To simplify our graph API, we will assume that there are no
       dupicate edges, and no edges that connect a node to itself.

.. odsascript:: AV/Graph/GdirundirCON.js
.. odsascript:: AV/Graph/GneighborCON.js
.. odsascript:: AV/Graph/GpathDefCON.js
.. odsascript:: AV/Graph/GconcomCON.js
.. odsascript:: AV/Graph/GsparseDefCON.js
.. odsascript:: AV/Development/GIntroRepCON2_2.js
.. odsascript:: AV/Development/GIntroRepCON2_3.js
