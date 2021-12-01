
CREATE OR ALTER PROCEDURE [dbo].[RegisterTask]
    @taskTitle VARCHAR(255),
    @projectId INT,
    @taskStartdate DATE,
    @taskEnddate DATE
AS
--reduce traffic
SET NOCOUNT ON;
BEGIN
	INSERT INTO [dbo].[userDetails]
	(taskTitle, projectId, taskStartdate, taskEnddate)
	VALUES
	(@taskTitle, @projectId, @taskStartdate, @taskEnddate);
END;