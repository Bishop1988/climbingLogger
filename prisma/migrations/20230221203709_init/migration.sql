-- CreateTable
CREATE TABLE "climbs" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT,
    "user" UUID NOT NULL,

    CONSTRAINT "climbs_pkey" PRIMARY KEY ("id")
);
