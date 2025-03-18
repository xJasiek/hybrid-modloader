import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function ModLoaderUI() {
  const [search, setSearch] = useState("");

  const modLoaders = [
    { name: "Forge", version: "1.20.1", status: "Installed", color: "#FFAA00" },
    { name: "Fabric", version: "1.20.1", status: "Available", color: "#66BBFF" },
    { name: "Quilt", version: "1.20.1", status: "Available", color: "#A466FF" },
    { name: "NeoForge", version: "1.20.1", status: "Available", color: "#FF6666" },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#0E3B0F", color: "#DADADA", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px", color: "#34AA33", textAlign: "center" }}>
        Hybrid Modloader
      </h1>

      {/* Search Bar */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <input
          placeholder="Search for modloaders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
            backgroundColor: "#1E5E20",
            color: "white",
            border: "2px solid #34AA33",
            width: "320px",
            fontSize: "1rem",
          }}
        />
        <button style={{ padding: "12px", backgroundColor: "#34AA33", borderRadius: "8px", color: "#0E3B0F", fontWeight: "bold", cursor: "pointer", border: "none", marginLeft: "10px" }}>
          <Search style={{ width: "24px", height: "24px" }} />
        </button>
      </div>

      {/* Modloader Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", justifyContent: "center" }}>
        {modLoaders
          .filter((mod) => mod.name.toLowerCase().includes(search.toLowerCase()))
          .map((mod, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <div style={{ padding: "20px", backgroundColor: "#1E5E20", borderRadius: "12px", textAlign: "center", border: `3px solid ${mod.color}`, boxShadow: `0 0 10px ${mod.color}AA` }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: mod.color }}>{mod.name}</h2>
                <p style={{ color: "#A4EFA3" }}>Version: {mod.version}</p>
                <button
                  style={{
                    marginTop: "12px",
                    padding: "12px",
                    backgroundColor: mod.status === "Installed" ? "#AA2E2E" : "#34AA33",
                    borderRadius: "8px",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  {mod.status === "Installed" ? "Uninstall" : "Install"}
                </button>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  ); // ✅ Closing bracket for return statement
} // ✅ Closing bracket for function
