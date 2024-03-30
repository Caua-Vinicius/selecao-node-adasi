/*
  Warnings:

  - The `horaInicio` column on the `Atividade` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `horaTermino` column on the `Atividade` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `horaAgendamentoInicio` on the `Atividade` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `horaAgendamentoTermino` on the `Atividade` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Atividade" ALTER COLUMN "data" SET DATA TYPE DATE,
DROP COLUMN "horaAgendamentoInicio",
ADD COLUMN     "horaAgendamentoInicio" TIME NOT NULL,
DROP COLUMN "horaAgendamentoTermino",
ADD COLUMN     "horaAgendamentoTermino" TIME NOT NULL,
DROP COLUMN "horaInicio",
ADD COLUMN     "horaInicio" TIME,
DROP COLUMN "horaTermino",
ADD COLUMN     "horaTermino" TIME;
