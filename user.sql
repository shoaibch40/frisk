PGDMP     2                    y            frisk    10.18    10.18     ?
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            ?
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            ?
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            ?
           1262    16394    frisk    DATABASE     ?   CREATE DATABASE frisk WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_Australia.1252' LC_CTYPE = 'English_Australia.1252';
    DROP DATABASE frisk;
             shoaib    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            ?
           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            ?
           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            ?            1259    16411    users    TABLE     ?   CREATE TABLE public.users (
    "ID" integer NOT NULL,
    name text NOT NULL,
    message text NOT NULL,
    pin integer NOT NULL,
    date timestamp without time zone NOT NULL,
    email text NOT NULL
);
    DROP TABLE public.users;
       public         shoaib    false    3            ?            1259    16409    users_ID_seq    SEQUENCE     ?   ALTER TABLE public.users ALTER COLUMN "ID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."users_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 900000
    CACHE 1
);
            public       shoaib    false    3    197            ?
          0    16411    users 
   TABLE DATA               F   COPY public.users ("ID", name, message, pin, date, email) FROM stdin;
    public       shoaib    false    197   p       ?
           0    0    users_ID_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."users_ID_seq"', 27, true);
            public       shoaib    false    196            p
           2606    16418    users users_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY ("ID");
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public         shoaib    false    197            ?
   ?   x???=n?0Fg??@??,YS?Ў]??h?AA?_&?Ѣp??=?Dx????????J?V?!ߪ??s;@??-???sE6?$???5??y???s????z6????.? ;YϏ\b??!??)??????:??2?S?9?1nF,1<R??h???Tla??i??H??	}?`???<a?w???(YAQ??ǬP?G?΀
!i?1,?c?????
'??؊??k??u?͂?[?c?[C?;?c>?s??     