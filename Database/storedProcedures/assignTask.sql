CREATE OR ALTER PROCEDURE [dbo].[assigntask]
(
    @taskid INT,
    @email VARCHAR(255)
)
AS
BEGIN
    SET NOCOUNT ON;
 INSERT INTO [dbo].[taskAssignment]
 VALUES (@taskid, @email)
END;
GO