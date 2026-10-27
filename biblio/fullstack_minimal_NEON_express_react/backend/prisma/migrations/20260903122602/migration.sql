-- CreateTable
CREATE TABLE "Musica" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "artista" TEXT NOT NULL,
    "album" TEXT,
    "genero" TEXT,
    "lancamento" TIMESTAMP(3),

    CONSTRAINT "Musica_pkey" PRIMARY KEY ("id")
);
