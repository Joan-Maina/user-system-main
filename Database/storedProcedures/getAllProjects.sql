CREATE OR ALTER PROCEDURE [dbo].[getallprojects]
(
    @projectid INT
)
AS
BEGIN
    SET NOCOUNT ON;
 SELECT * 
    FROM [dbo].[projectDetails];
END;
GO