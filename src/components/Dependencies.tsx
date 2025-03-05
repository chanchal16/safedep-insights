import { useInsights } from "@/contexts/InsightContext";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "./ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const Dependencies = () => {
  const { data } = useInsights();
  const { insight } = data;
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;
  // Calculate total pages
  const totalEntries = insight?.dependencyGraph?.dependencies?.length ?? 0;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  // Get current page entries
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentEntries =
    insight?.dependencyGraph?.dependencies?.slice(startIndex, endIndex) || [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dependencies</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Version</TableHead>
              <TableHead>Relation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentEntries?.map((dep, index) => (
              <TableRow key={index}>
                <TableCell>{dep.packageVersion?.package?.name}</TableCell>
                <TableCell>{dep.packageVersion?.version}</TableCell>
                <TableCell>{dep?.relation.replace("RELATION_", "")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Pagination */}
        <Pagination className="mt-4">
          <PaginationContent>
            {/* Previous Button */}
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                aria-disabled={currentPage === 1}
              />
            </PaginationItem>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => handlePageChange(page)}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Next Button */}
            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
                aria-disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  );
};
export default Dependencies;