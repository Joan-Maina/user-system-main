CREATE OR ALTER PROCEDURE [dbo].[gettasksinproject]
(
    @projectid INT
)
AS
BEGIN
    SET NOCOUNT ON;
   SELECT * 
   FROM [dbo].[taskDetails]
   WHERE projectId = @projectid;
END;
GO