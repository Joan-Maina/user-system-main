CREATE OR ALTER PROCEDURE [dbo].[getallusers]
AS
BEGIN
    SET NOCOUNT ON;
   SELECT * 
   FROM [dbo].[userDetails]
   WHERE isDeleted = 0;
END;
GO